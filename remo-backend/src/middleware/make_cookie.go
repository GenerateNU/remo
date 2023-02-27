package middleware

import (
	"remo/backend/src/model"

	"github.com/golang-jwt/jwt/v4"
)

// type LoginInfo struct {
// 	Credential string `json:"credential"`
// 	Email      string `json:"email"`
// 	FirstName  string `json:"first_name"`
// 	LastName   string `json:"last_name"`
// 	Picture    string `json:"picture"`
// }

func MakeJWT(loginInfo model.LoginInfo, secret string) (tokenString string, err error) {

	//example of making a token with specific  details:
	// claims := jwt.MapClaims{}
	// claims["subject"] = subject
	// claims["authorized"] = true
	// // claims["audience"] = audience
	// token := jwt.NewWithClaims(jwt.SigningMethodRS256, claims)

	mySigningKey := []byte("secret")

	// Create the Claims
	claims := &jwt.MapClaims{
		"Email":      loginInfo.Email,
		"FirstName":  loginInfo.FirstName,
		"LastName":   loginInfo.LastName,
		"Credential": loginInfo.Credential,
		"Picture":    loginInfo.Picture,

		// "iss": "issuer",
		// "exp": time.Now().Add(time.Hour).Unix(),
		// "data": map[string]string{
		// 	"id":   "123",
		// 	"name": "JohnDoe",
		// },
	}

	//can use any signing encryption algorithm, this is with HS256, other option could be RS256
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	signedToken, err := token.SignedString(mySigningKey)

	println("signedJWTToken:" + signedToken)
	return signedToken, err
}
