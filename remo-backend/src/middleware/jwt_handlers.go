package middleware

import (
	"fmt"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v4"
)

// middleware for protected endpoints
func JwtAuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		cookie, err := c.Cookie("remo_jwt")
		if err != nil {
			err := NewBadRequestError("token not found")
			c.JSON(err.Status, err)
		}
		if DecodeJWT(cookie, "secretkey") != nil {
			err := NewBadRequestError("invalid_json_body")
			c.JSON(err.Status, err)
		}
		println("JWT TOKEN VALID")
		c.Next()
	}
}

// Decode JWT for middleware validation
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

	return nil
}
