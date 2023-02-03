package users

import (
	"fmt"
	"net/http"
	"remo/backend/src/domain/users"
	"remo/backend/src/services"
	errors "remo/backend/src/utils"
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v4"
	"google.golang.org/api/idtoken"
)

// holds the DB secret key
const SecretKey = "abcdefghijklmnopqrstuvwxy"

const audience string = "146112178699-kj35h882rr6711tflocnoodhquqtcv0f.apps.googleusercontent.com"

type loginInfo struct {
	Credential string `json:"credential"`
}

func Authenticate(c *gin.Context) {
	println("WOOHOO endpoint reached")
	var loginInfo loginInfo

	// check for invalid JSON bindings and rasie an error if true
	if err := c.ShouldBindJSON(&loginInfo); err != nil {
		err := errors.NewBadRequestError("invalid_json_body")
		c.JSON(err.Status, err)
		return
	}

	payload, err := idtoken.Validate(c, loginInfo.Credential, audience)
	if err != nil {
		errors.NewBadRequestError("Could not validate sign in token")
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Invalid JWT."})
		return
	}

	// create a JWT for the app and send it back to the client for future requests
	tokenString, err := MakeJWT(payload.Subject, "secret")
	if err != nil {
		errors.NewBadRequestError("Failed to create JWT")
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Something went wrong completing your sign in."})
		return
	}

	c.SetCookie("remo_jwt", tokenString, 86400, "/", "", true, true)
	c.Status(http.StatusOK)

	// println(cred)
	println(loginInfo.Credential)

	// create the new user with the CreateUser service
	// result, saveErr := services.CreateUserTest(cred)

	// // // raise a save error if one occurs
	// if saveErr != nil {
	// 	println("save error")
	// 	c.JSON(saveErr.Status, saveErr)
	// 	return
	// }

	// // set the context JSON to the new user
	// c.JSON(http.StatusOK, result)
	/*
		var loginInfo loginInfo
				if err := c.ShouldBindJSON(&loginInfo); err != nil {
		      server.ErrorLogger("Couldn't convert token to valid struct", err, c)
					c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid token"})
					return
				}

				payload, err := idtoken.Validate(c, loginInfo.Credential, audience)
				if err != nil {
					server.ErrorLogger("Could not validate sign in token", err, c)
					c.JSON(http.StatusInternalServerError, gin.H{"error": "Invalid JWT."})
					return
				}

				// create a JWT for the app and send it back to the client for future requests
				tokenString, err := server.MakeJWT(payload.Subject, "secret")
				if err != nil {
					server.ErrorLogger("Failed to create JWT", err, c)
					c.JSON(http.StatusInternalServerError, gin.H{"error": "Something went wrong completing your sign in."})
					return
				}

				c.SetCookie("app_session", tokenString, 86400, "/", "", true, true)
				c.Status(http.StatusOK)
			}
	*/

	println("AUTHENTICATED")
}

func ProtectedEndpointTest(c *gin.Context) {
	println("entered protected endpoint with remo jwt")

}

// for now takes in secret string, but will put in env later
func MakeJWT(subject string, secret string) (tokenString string, err error) {

	// claims := jwt.MapClaims{}
	// claims["subject"] = subject
	// claims["authorized"] = true
	// // claims["audience"] = audience

	// token := jwt.NewWithClaims(jwt.SigningMethodRS256, claims)

	mySigningKey := []byte("secret")

	// Create the Claims
	claims := &jwt.RegisteredClaims{Subject: subject}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	signedToken, err := token.SignedString(mySigningKey)

	//encoded string
	// t, err := token.SignedString([]byte(secret))
	// if err != nil {
	// 	errors.NewBadRequestError("token encoding is bad")
	// 	panic(err)
	// }
	println("signedJWTToken:" + signedToken)
	return signedToken, err
}

// move secret to env
func DecodeJWT(tokenStr string, secretStr string) error {
	mySigningKey := []byte(secretStr)
	// claims := jwt.RegisteredClaims{}
	token, err := jwt.ParseWithClaims(tokenStr, &jwt.RegisteredClaims{}, func(token *jwt.Token) (interface{}, error) {
		return mySigningKey, nil
	})

	if err != nil {
		fmt.Println("ERROR parsing token", err)
		fmt.Println("Token provided", tokenStr)
		return err
	}

	if token.Valid {
		println("VALID TOKEN:" + token.Raw)
	}

	// if claims, ok := token.Claims.(claims); ok && token.Valid {
	// 	println("VALID_TOKEN:" + token)
	// } else {
	// 	err := errors.NewBadRequestError("invalid json")
	// 	c.JSON(err.Status, err)

	// }

	return nil
}

// Registers a new user into the MySQL database using the CreateUser service
func Register(c *gin.Context) {
	var user users.User

	// check for invalid JSON bindings and rasie an error if true
	if err := c.ShouldBindJSON(&user); err != nil {
		err := errors.NewBadRequestError("invalid_json_body")
		c.JSON(err.Status, err)
		return
	}

	// create the new user with the CreateUser service
	result, saveErr := services.CreateUser(user)

	// raise a save error if one occurs
	if saveErr != nil {
		c.JSON(saveErr.Status, saveErr)
		return
	}

	// set the context JSON to the new user
	c.JSON(http.StatusOK, result)
}

// Logs in an existing user to the backend
func Login(c *gin.Context) {
	var user users.User

	if err := c.ShouldBindJSON(&user); err != nil {
		err := errors.NewBadRequestError("invalid json")
		c.JSON(err.Status, err)
		return
	}

	result, getErr := services.GetUser(user)
	if getErr != nil {
		c.JSON(getErr.Status, getErr)
		return
	}

	claims := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.StandardClaims{
		Issuer:    strconv.Itoa(int(result.ID)),
		ExpiresAt: time.Now().Add(time.Hour * 72).Unix(),
	})

	token, err := claims.SignedString([]byte(SecretKey))
	if err != nil {
		err := errors.NewInternalServerError("login failed")
		c.JSON(err.Status, err)
		return
	}

	c.SetCookie("jwt", token, 3213, "/", "localhost", false, true)

	c.JSON(http.StatusOK, result)
}

func Get(c *gin.Context) {
	// cookie, err := c.Cookie("jwt")
	// if err != nil {
	// 	getErr := errors.NewInternalServerError("could not retrieve cookie")
	// 	c.JSON(getErr.Status, getErr)
	// 	return
	// }

	// token, err := jwt.ParseWithClaims(cookie, &jwt.StandardClaims{}, func(*jwt.Token) (interface{}, error) {
	// 	return []byte(SecretKey), nil
	// })
	// if err != nil {
	// 	restErr := errors.NewInternalServerError("error parsing cookie")
	// 	c.JSON(restErr.Status, restErr)
	// 	return
	// }

	// claims := token.Claims.(*jwt.StandardClaims)
	// issuer, err := strconv.ParseInt(claims.Issuer, 10, 64)
	// if err != nil {
	// 	restErr := errors.NewBadRequestError("user id should be a number")
	// 	c.JSON(restErr.Status, restErr)
	// 	return
	// }
	var issuer int64
	issuer = 1
	result, restErr := services.GetUserByID(issuer)
	if restErr != nil {
		c.JSON(restErr.Status, restErr)
		return
	}

	c.JSON(http.StatusOK, result)
}

func Logout(c *gin.Context) {
	c.SetCookie("jwt", "", -1, "", "", false, true)
	c.JSON(http.StatusOK, gin.H{
		"message": "success",
	})
}

func GoogleLogout(c *gin.Context) {
	println("Google logout")
	c.SetCookie("remo_jwt", "", -1, "", "", false, true)
	c.JSON(http.StatusOK, gin.H{
		"message": "success",
	})
}
