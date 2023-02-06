package endpoints

import (
	"net/http"
	"remo/backend/src/model"
	"remo/backend/src/utils"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
	"google.golang.org/api/idtoken"
)

type Controller interface {
	Serve() *gin.Engine
}

type PgController struct {
	model.Model
}

const audience string = "146112178699-kj35h882rr6711tflocnoodhquqtcv0f.apps.googleusercontent.com"

// Everything above here is going to move to a  folder (controller layer)
func (pg *PgController) Serve() *gin.Engine {
	r := gin.Default()

	go r.POST("/v1/register", func(c *gin.Context) {
		var user model.User

		if err := c.BindJSON(&user); err != nil {
			c.JSON(http.StatusBadRequest, "Failed to unmarshal user")
			return
		}

		_, err := pg.AddUser(user)

		if err != nil {
			c.JSON(http.StatusBadRequest, "Failed to add a user")
			panic(err)
		}

		c.JSON(http.StatusOK, user.ID)
	})

	go r.POST("v1/login", func(c *gin.Context) {
		email := c.Param("email")
		password := c.Param("password")

		usr := pg.UserByEmail(email)

		if err := bcrypt.CompareHashAndPassword([]byte(password), []byte(usr.Password)); err != nil {
			utils.NewBadRequestError("failed to decrypt the password")
			return
		}

		var loginInfo model.LoginInfo

		// check for invalid JSON bindings and rasie an error if true
		if err := c.ShouldBindJSON(&loginInfo); err != nil {
			err := utils.NewBadRequestError("invalid_json_body")
			c.JSON(err.Status, err)
			return
		}

		//gets the id token from the google login credentials and validate it with our client id (audience)
		payload, err := idtoken.Validate(c, loginInfo.Credential, audience)
		if err != nil {
			utils.NewBadRequestError("Could not validate sign in token")
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Invalid JWT."})
			return
		}

		// create a JWT for the app and send it back to the client for future requests
		tokenString, err := utils.MakeJWT(payload.Subject, "secretkey")
		if err != nil {
			utils.NewBadRequestError("Failed to create JWT")
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Something went wrong completing your sign in."})
			return
		}

		//TODO: we should probably correspond the token to the user in the DB.
		//We can also get name/email and other stuff from the JWT to connect it to existing users or to make new user profile.

		//sets the token JWT generated above as a cookie in the frontend
		c.SetCookie("remo_jwt", tokenString, 86400, "/", "", true, true)
		c.Status(http.StatusOK)

		println("AUTHENTICATED")
	})

	go r.GET("/logout", func(c *gin.Context) {
		println("Google logout")
		c.SetCookie("remo_jwt", "", -1, "", "", false, true)
		c.JSON(http.StatusOK, gin.H{
			"message": "success",
		})
	})

	go r.GET("/v1/books/:bookId", func(c *gin.Context) {
		id := c.Param("bookId")
		c.JSON(http.StatusOK, pg.Book(id))
	})

	r.POST("/v1/addBook", func(c *gin.Context) {
		var book model.Book

		if err := c.BindJSON(&book); err != nil {
			c.JSON(http.StatusBadRequest, "Failed to unmarshal book")
			return
		}

		_, err := pg.AddBooks(book)

		if err != nil {
			c.JSON(http.StatusBadRequest, "Failed to add a book")
			panic(err)
		}

		c.JSON(http.StatusOK, book.BookId)
	})

	//protected endpoint group (uses middelware below)
	protected := r.Group("/protected")
	//sets up middleware for this protected endpoint
	go protected.Use(utils.JwtAuthMiddleware())
	go protected.GET("/hi", ProtectedEndpointTest)
	return r
}

const SecretKey = "abcdefghijklmnopqrstuvwxy"

func ProtectedEndpointTest(c *gin.Context) {
	println("entered protected endpoint with remo jwt")

}
