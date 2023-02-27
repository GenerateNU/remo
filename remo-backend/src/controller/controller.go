package controller

import (
	"fmt"
	"net/http"
	"os"
	"remo/backend/src/middleware"
	"remo/backend/src/model"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
	// "github.com/golang-jwt/jwt/v4"
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

		// token, err := jwt.ParseWithClaims(loginInfo.Credential, &jwt.RegisteredClaims{}, func(token *jwt.Token) (interface{}, error) {
		// 	return loginInfo, nil
		// })

		// fmt.Print(token)
		// fmt.Print(loginInfo)

		// hmacSecretString := // Value
		// hmacSecret := []byte(hmacSecretString)
		// token, err := jwt.Parse(loginInfo.Credential, nil)

		//    claims := token.Claims.(jwt.MapClaims)
		//    jwt.Parser
		// token, _, err := new(jwt.Parser).ParseUnverified(loginInfo.Credential, jwt.MapClaims{})

		// if claims, ok := token.Claims.(jwt.MapClaims); ok {
		// 	loginInfo.Email = fmt.Sprint(claims["email"])
		// }
		fmt.Println("TEST")
		// token, err := jwt.Parse(loginInfo.Credential, nil)
		token, _ := jwt.Parse(loginInfo.Credential, nil)
		// if token, _ := jwt.Parse(loginInfo.Credential, nil); token != nil {
		// 	// doStuffWithToken(token)
		// 	fmt.Print("error")
		// }

		// if (err.(*jwt.ValidationError).Errors & jwt.ValidationErrorMalformed) {
		// panic("Token is malformed: " + err.Error())
		// }
		// token was parsed
		// doStuffWithToken(token)

		// token, err := jwt.Parse(loginInfo.Credential, nil)
		// if err != nil {
		// 	fmt.Print(err.Error())

		// 	// fmt.Errorf
		// 	return
		// }

		// extract the claims
		claims, ok := token.Claims.(jwt.MapClaims)
		if !ok {
			return // nil, fmt.Errorf("invalid JWT claims")
		}

		// assign the claims to the fields in myClaims
		if email, ok := claims["email"].(string); ok {
			loginInfo.Email = email
		}

		if first, ok := claims["given_name"].(string); ok {
			loginInfo.FirstName = first
		}

		if last, ok := claims["family_name"].(string); ok {
			loginInfo.LastName = last
		}

		if pic, ok := claims["picture"].(string); ok {
			loginInfo.Picture = pic
		}

		fmt.Println(loginInfo)

		//gets the id token from the google login credentials and validate it with our client id (audience)
		// payload, err := idtoken.Validate(c, loginInfo.Credential, audience)
		// if err != nil {
		// 	middleware.NewBadRequestError("Could not validate sign in token")
		// 	c.JSON(http.StatusInternalServerError, gin.H{"error": "Invalid JWT."})
		// 	return
		// }
		// fmt.Print(loginInfo)

		/*
			 send LoginInfo email element to --> will panic with an error if resultset is null
			 u, e := ms.UserByEmail(loginInfo.email)
			 if usr == ms.User{}{
				c.JSON(http.StatusInternalServerError, gin.H{"error": "Email not in database."})
				return
			 }
		*/

		// create a JWT for the app and send it back to the client for future requests
		tokenString, err := middleware.MakeJWT(loginInfo, "secretkey")
		if err != nil {
			middleware.NewBadRequestError("Failed to create JWT")
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Something went wrong completing your sign in."})
			return
		}

		//TODO: we should probably correspond the token to the user in the DB.
		//We can also get name/email and other stuff from the JWT to connect it to existing users or to make new user profile.

		//sets the token JWT generated above as a cookie in the frontend
		// c.SetCookie("remo_jwt", tokenString, 86400, "/", "", true, true)

		// c.Status(http.StatusOK)
		message := tokenString
		c.JSON(http.StatusOK, message)

		println("AUTHENTICATED", message)
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
