package controller

import (
	"net/http"
	"os"
	"remo/backend/src/middleware"
	"remo/backend/src/model"

	"github.com/gin-gonic/gin"
	"google.golang.org/api/idtoken"
)

type Controller interface {
	Serve() *gin.Engine
}

type MsController struct {
	model.Model
}

var audience string = os.Getenv("audience")

// USERNAME := os.Getenv("remo")
// Everything above here is going to move to a  folder (controller layer)
func (ms *MsController) Serve() *gin.Engine {
	r := gin.Default()

	r.POST("/v1/register", func(c *gin.Context) {
		var user model.User

		if err := c.BindJSON(&user); err != nil {
			c.JSON(http.StatusBadRequest, "Failed to unmarshal user")
			return
		}

		user.Validate()

		_, err := ms.AddUser(user)

		if err != nil {
			c.JSON(http.StatusBadRequest, "Failed to add a user")
			panic(err)
		}

		c.JSON(http.StatusOK, user.ID)
	})

	r.GET("/v1/user/:id", func(c *gin.Context) {
		id := c.Param("id")
		c.JSON(http.StatusOK, ms.UserByID(id))

	})

	r.POST("v1/login", func(c *gin.Context) {

		/* check to see if the user exists in the database
		if so, continute to create authenticated token & cookie
		if not, the model will panic with an error TODO: implement better error handling for invalid logins
		*/
		var loginInfo model.LoginInfo

		// check for invalid JSON bindings and rasie an error if true
		if err := c.ShouldBindJSON(&loginInfo); err != nil {
			err := middleware.NewBadRequestError("invalid_json_body")
			c.JSON(err.Status, err)
			return
		}

		/*
			 send LoginInfo email element to --> will panic with an error if resultset is null
			 ms.UserByEmail(email)

			TODO: given a user that exist in the DB, fetch & set their user type
		*/

		//gets the id token from the google login credentials and validate it with our client id (audience)
		payload, err := idtoken.Validate(c, loginInfo.Credential, audience)
		if err != nil {
			middleware.NewBadRequestError("Could not validate sign in token")
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Invalid JWT."})
			return
		}

		// create a JWT for the app and send it back to the client for future requests
		tokenString, err := middleware.MakeJWT(payload.Subject, "secretkey")
		if err != nil {
			middleware.NewBadRequestError("Failed to create JWT")
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

	r.GET("/logout", func(c *gin.Context) {
		println("Google logout")
		c.SetCookie("remo_jwt", "", -1, "", "", false, true)
		c.JSON(http.StatusOK, gin.H{
			"message": "success",
		})
	})

	r.GET("/v1/books/:bookId", func(c *gin.Context) {
		id := c.Param("bookId")
		c.JSON(http.StatusOK, ms.Book(id))
	})

	r.POST("/v1/addBook", func(c *gin.Context) {
		var book model.Book

		if err := c.BindJSON(&book); err != nil {
			c.JSON(http.StatusBadRequest, "Failed to unmarshal book")
			return
		}

		_, err := ms.AddBooks(book)

		if err != nil {
			c.JSON(http.StatusBadRequest, "Failed to add a book")
			panic(err)
		}

		c.JSON(http.StatusOK, book.BookId)
	})

	//protected endpoint group (uses middelware below)
	protected := r.Group("/protected")
	//sets up middleware for this protected endpoint
	protected.Use(middleware.JwtAuthMiddleware())
	protected.GET("/hi", ProtectedEndpointTest)
	return r
}

var SecretKey string = os.Getenv("secretKey")

func ProtectedEndpointTest(c *gin.Context) {
	println("entered protected endpoint with remo jwt")
}
