package endpoints

import (
	"remo/backend/src/controller/users"

	"github.com/gin-gonic/gin"
)

// func books() []t.Book {
// 	return []t.Book{
// 		{BookId: "1", Title: "test", Author: "test-author"},
// 	}
// }

// // getAlbums responds with the list of all albums as JSON.
// func getBooks(c *gin.Context) {
// 	c.JSON(http.StatusOK, books())
// }

// Everything above here is going to move to a  folder (controller layer)
func Serve() *gin.Engine {
	r := gin.Default()
	// r.GET("/v1/books", getBooks)
	r.POST("/v1/register", users.Register)
	r.POST("v1/login", users.Login)
	r.GET("v1/user", users.Get)
	r.GET("v1/logout", users.Logout)

	return r
}
