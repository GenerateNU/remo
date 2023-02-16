package main

import (
	"net/http"
	"net/http/httptest"
	e "remo/backend/src/endpoints"
	"testing"

	"github.com/huandu/go-assert"
)

func TestGetBooks(t *testing.T) {
	router := e.Serve()

	w := httptest.NewRecorder()

	req, _ := http.NewRequest("GET", "/v1/books", nil)
	router.ServeHTTP(w, req)

	assert.Equal(t, 200, w.Code)

	// var books []e.Book

	// err := json.Unmarshal(w.Body.Bytes(), &books)

	// if err != nil {
	// 	panic(err)
	// }

	// assert.Equal(t, []e.Book{
	// 	{
	// 		BookId: "1",
	// 		Title:  "test",
	// 		Author: "test-author",
	// 	},
	// }, books)
}
