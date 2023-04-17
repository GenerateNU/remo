package controller

import (
	"fmt"
	"net/http"
	"os"
	"remo/backend/src/middleware"
	"remo/backend/src/model"
	"strconv"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
)

type Controller interface {
	Serve() *gin.Engine
}

type MsController struct {
	model.Model
}

func (ms *MsController) Serve() *gin.Engine {
	r := gin.Default()

	r.POST("/v1/register", func(c *gin.Context) {
		var user model.User

		if err := c.BindJSON(&user); err != nil {
			c.JSON(http.StatusBadRequest, "Failed to unmarshal user")
			return
		}

		_, err := ms.AddUser(user)
		err2 := ms.MakeLibrary(user)

		if err != nil {
			c.JSON(http.StatusBadRequest, "Failed to add a user")
			panic(err)
		}
		if err2 != nil {
			c.JSON(http.StatusBadRequest, "Failed to create a library for the user")
			panic(err)
		}

		c.JSON(http.StatusOK, user.ID)
	})

	r.GET("/v1/user/:id", func(c *gin.Context) {
		id := c.Param("id")
		c.JSON(http.StatusOK, ms.UserByID(id))

	})

	r.POST("v1/login", func(c *gin.Context) {

		var loginInfo model.LoginInfo

		// check for invalid JSON bindings and rasie an error if true
		if err := c.ShouldBindJSON(&loginInfo); err != nil {
			err := middleware.NewBadRequestError("invalid_json_body")
			c.JSON(err.Status, err)
			return
		}

		token, _ := jwt.Parse(loginInfo.Credential, nil)

		// extract the claims
		claims, ok := token.Claims.(jwt.MapClaims)
		if !ok {
			fmt.Print("INVALID GMAIL")
			return
		}

		if email, ok := claims["email"].(string); ok {
			loginInfo.Email = email
			check_usr, err := ms.UserByEmail(email)
			if err != nil {
				c.JSON(http.StatusInternalServerError, gin.H{"error": "Something went wrong completing your sign in."})
				return
			}
			loginInfo.ID = strconv.Itoa(check_usr.ID)
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

		// create a JWT for the app and send it back to the client for future requests
		tokenString, err := middleware.MakeJWT(loginInfo, "secretkey")
		if err != nil {
			middleware.NewBadRequestError("Failed to create JWT")
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Something went wrong completing your sign in."})
			return
		}

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

	r.GET("/v1/all_books", func(c *gin.Context) {
		c.JSON(http.StatusOK, ms.AllBooks())
	})

	r.GET("/v1/user_books/:userID", func(c *gin.Context) {
		id := c.Param("userID")
		c.JSON(http.StatusOK, ms.UserBooks(id))
	})

	r.POST("v1/checkout_book/:bookId/:userId", func(c *gin.Context) {
		isbn_13 := c.Param("bookId")
		user_id := c.Param("userId")

		err := ms.CheckoutBook(user_id, isbn_13)

		if err != nil {
			c.JSON(http.StatusBadRequest, "Failed to checkout book")
			panic(err)
		}

		c.JSON(http.StatusOK, isbn_13)

	})

	r.POST("v1/return/:bookId/:userId", func(c *gin.Context) {
		isbn_13 := c.Param("bookId")
		user_id := c.Param("userId")

		err := ms.ReturnBookByID(user_id, isbn_13)

		if err != nil {
			c.JSON(http.StatusBadRequest, "Failed to return book")
			panic(err)
		}

		c.JSON(http.StatusOK, isbn_13)
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

	r.POST("/v1/onboarding_questions/:user_Id", func(c *gin.Context) {
		var questions model.OnboardingQuestions
		user_id := c.Param("user_Id")

		if err := c.BindJSON(&questions); err != nil {
			c.JSON(http.StatusBadRequest, "Failed to unmarshal questions")
			return
		}

		err := ms.AddOnboardingQuestions(user_id, questions)

		if err != nil {
			c.JSON(http.StatusBadRequest, "Failed to register questions")
			panic(err)
		}

		c.JSON(http.StatusOK, "success")
	})

	r.GET("/v1/check_onboarded/:user_Id", func(c *gin.Context) {
		user_id := c.Param("user_Id")

		check, err := ms.CheckOnboarded(user_id)

		if err != nil {
			c.JSON(http.StatusBadRequest, "Failed to check onboarded user")
			panic(err)
		}

		c.JSON(http.StatusOK, check)
	})

	r.PUT("/v1/onboard/:user_Id", func(c *gin.Context) {
		user_id := c.Param("user_Id")

		err := ms.Onboard(user_id)

		if err != nil {
			c.JSON(http.StatusBadRequest, "Failed to onboard user")
			panic(err)
		}

		c.JSON(http.StatusOK, "success")
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
