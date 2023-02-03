package endpoints

import (
	"remo/backend/src/controller/users"
	errors "remo/backend/src/utils"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"

	"net/http"
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
	r.Use(cors.Default())

	// r.GET("/v1/books", getBooks)
	go r.POST("/v1/register", users.Register)
	go r.POST("v1/login", users.Login)
	go r.GET("v1/user", users.Get)
	go r.GET("v1/logout", users.Logout)

	go r.POST("/auth", users.Authenticate)
	go r.GET("/", googleLogin)
	go r.GET("/googlelogout", users.GoogleLogout)
	go r.GET("/google", googleLogin)
	// go r.GET("/albums", getAlbums)
	// go r.GET("/albums/:id", getAlbumByID)
	// go r.POST("/albums", postAlbums)

	protected := r.Group("/protected")
	go protected.Use(JwtAuthMiddleware())
	go protected.GET("/hi", users.ProtectedEndpointTest)
	return r
}

func JwtAuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		cookie, err := c.Cookie("remo_jwt")
		if err != nil {
			err := errors.NewBadRequestError("token not found")
			c.JSON(err.Status, err)
		}
		if users.DecodeJWT(cookie, "secret") != nil {
			err := errors.NewBadRequestError("invalid_json_body")
			c.JSON(err.Status, err)
		}
		println("JWT TOKEN VALID")
		c.Next()
	}
}

func googleLogin(c *gin.Context) {
	println("hi google")
}

// album represents data about a record album.
type album struct {
	ID     string  `json:"id"`
	Title  string  `json:"title"`
	Artist string  `json:"artist"`
	Price  float64 `json:"price"`
}

// albums slice to seed record album data.
var albums = []album{
	{ID: "1", Title: "Blue Train", Artist: "John Coltrane", Price: 56.99},
	{ID: "2", Title: "Jeru", Artist: "Gerry Mulligan", Price: 17.99},
	{ID: "3", Title: "Sarah Vaughan and Clifford Brown", Artist: "Sarah Vaughan", Price: 39.99},
}

// getAlbums responds with the list of all albums as JSON.
func getAlbums(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, albums)
}

// postAlbums adds an album from JSON received in the request body.
func postAlbums(c *gin.Context) {
	var newAlbum album

	// Call BindJSON to bind the received JSON to
	// newAlbum.
	// c.ShouldBindJSON()
	// check for invalid JSON bindings
	if err := c.BindJSON(&newAlbum); err != nil {
		return
	}

	// Add the new album to the slice.
	albums = append(albums, newAlbum)
	c.IndentedJSON(http.StatusCreated, newAlbum)
}

// getAlbumByID locates the album whose ID value matches the id
// parameter sent by the client, then returns that album as a response.
func getAlbumByID(c *gin.Context) {
	id := c.Param("id")

	// Loop through the list of albums, looking for
	// an album whose ID value matches the parameter.
	for _, a := range albums {
		if a.ID == id {
			c.IndentedJSON(http.StatusOK, a)
			return
		}
	}
	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "album not found"})
}
