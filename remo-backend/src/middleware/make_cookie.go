package middleware

import (
	"remo/backend/src/model"

	"github.com/golang-jwt/jwt/v4"
)

func MakeJWT(loginInfo model.LoginInfo, secret string) (tokenString string, err error) {

	mySigningKey := []byte("secret")

	// Create the Claims
	claims := &jwt.MapClaims{
		"Email":      loginInfo.Email,
		"FirstName":  loginInfo.FirstName,
		"LastName":   loginInfo.LastName,
		"Credential": loginInfo.Credential,
		"Picture":    loginInfo.Picture,
		"ID":         loginInfo.ID,
	}

	//can use any signing encryption algorithm, this is with HS256, other option could be RS256
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	signedToken, err := token.SignedString(mySigningKey)

	println("signedJWTToken:" + signedToken)
	return signedToken, err
}
