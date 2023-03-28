package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"net/http/httptest"
	"os"
	"remo/backend/graph"
	e "remo/backend/src/endpoints"
	"remo/backend/src/model"
	"testing"

	"github.com/gin-gonic/gin"

	"github.com/huandu/go-assert"
)

func TestGetBooks(t *testing.T) {
	conn, err := sql.Open("mysql", "remo:pwd@tcp(localhost:3333)/remodb")
	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to connect to database: %v\n", err)
		os.Exit(1)
	}

	defer conn.Close()

	m := &model.MsModel{
		Conn: conn,
	}
	c := &e.MsController{
		Model: m,
	}
	router := c.Serve()

	w := httptest.NewRecorder()

	req, _ := http.NewRequest("GET", "/v1/books/9780786838653", nil)

	router.ServeHTTP(w, req)

	assert.Equal(t, 200, w.Code)

	var books model.Book

	if e := json.Unmarshal(w.Body.Bytes(), &books); e != nil {
		panic(err)
	}

	test_book := model.Book{
		BookId:  "3757",
		Title:   "Percy Jackson and the Olympians",
		Author:  "Rick Riordan",
		ISBN_13: "9780786838653",
		ISBN_10: "0786838655",
	}
	assert.Equal(t, test_book, books)
}

// func TestGetBookByID(t *testing.T) {
// 	conn, err := sql.Open("mysql", "remo:pwd@tcp(localhost:3333)/remodb")
// 	if err != nil {
// 		fmt.Fprintf(os.Stderr, "Unable to connect to database: %v\n", err)
// 		os.Exit(1)
// 	}

// 	defer conn.Close()

// 	m := &model.MsModel{
// 		Conn: conn,
// 	}
// 	c := &e.MsController{
// 		Model: m,
// 	}
// 	router := c.Serve()

// 	w := httptest.NewRecorder()

// 	req, _ := http.NewRequest("GET", "/v1/books/5000", nil)

// 	router.ServeHTTP(w, req)

// 	assert.Equal(t, 200, w.Code)

// 	var book model.Book

// 	if e := json.Unmarshal(w.Body.Bytes(), &book); e != nil {
// 		panic(err)
// 	}

// 	test_book := model.Book{
// 		BookId: "5000",
// 	}

// 	fmt.Println(test_book)
// 	fmt.Println(book)

// 	assert.Equal(t, test_book, book)
// }

type Controller interface {
	Serve() *gin.Engine
}

type MsController struct {
	model.Model
}

var resolver = graph.Resolver{}
var qResolver = resolver.Query()
var mResolver = resolver.Mutation()

func TestGetBookByID2(t *testing.T) {
	// Create a test router
	r := gin.Default()
	r.GET("/v1/books/:bookId", func(c *gin.Context) {
		id := c.Param("bookId")
		book, err := qResolver.GetBookByID(c.Request.Context(), id)
		if err != nil {
			log.Printf("GetBookByID failed: %v", err)
			c.AbortWithStatus(http.StatusNotFound)
			return
		}
		c.JSON(http.StatusOK, book)
	})

	// Make a GET request with a valid book ID
	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/v1/books/5000", nil)
	r.ServeHTTP(w, req)

	// Check the response status code
	if w.Code != http.StatusOK {
		t.Errorf("expected status code %d but got %d", http.StatusOK, w.Code)
	}

	// Check the response body
	expected := `{"id":"5000","story_id":"5000","author":"Stewart Ross","cover_image":"","date_created":"2021-01-19T01:15:00Z","date_updated":"2021-01-19T01:15:00Z","default_user_id":"68","foreword":"","editor":"","illustrator":"","isbn_10":"076366992X","isbn_13":9780763669928,"num_pages":85,"pub_date":2014,"copyright_date":2014,"edition":0,"synopsis":"Examines eleven of the greatest explorers and expeditions in history and explains the impact they had on people's perception of the world, in a book with unfolding cross sections.","title":"Into the Unknown","word_count":0,"sub_title":"","asin":""}`
	if w.Body.String() != expected {
		t.Errorf("expected body %s but got %s", expected, w.Body.String())
	}

}
