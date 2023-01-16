package endpoints

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type Book struct {
	BookId string `json:"id"`
	Title  string `json:"title"`
	Author string `json:"author"`
}

var books = []Book{
	{BookId: "1", Title: "test", Author: "test-author"},
}

// getAlbums responds with the list of all albums as JSON.
func getBooks(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, books)
}

// Everything above here is going to move to a  folder (controller layer)
func Serve() *gin.Engine {
	r := gin.Default()
	r.GET("/v1/books", getBooks)
	return r
}
