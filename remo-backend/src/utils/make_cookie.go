package utils

import "github.com/golang-jwt/jwt/v4"

func MakeJWT(subject string, secret string) (tokenString string, err error) {

	//example of making a token with specific  details:
	// claims := jwt.MapClaims{}
	// claims["subject"] = subject
	// claims["authorized"] = true
	// // claims["audience"] = audience
	// token := jwt.NewWithClaims(jwt.SigningMethodRS256, claims)

	mySigningKey := []byte("secret")

	// Create the Claims
	claims := &jwt.RegisteredClaims{Subject: subject}

	//can use any signing encryption algorithm, this is with HS256, other option could be RS256
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	signedToken, err := token.SignedString(mySigningKey)

	println("signedJWTToken:" + signedToken)
	return signedToken, err
}
