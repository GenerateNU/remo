package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"net/http"
	"net/http/httptest"
	"os"
	c "remo/backend/src/controller"
	"remo/backend/src/model"
	"testing"

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
	c := &c.MsController{
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

func TestGetUserByID(t *testing.T) {
	conn, err := sql.Open("mysql", "remo:pwd@tcp(localhost:3333)/remodb")
	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to connect to database: %v\n", err)
		os.Exit(1)
	}

	defer conn.Close()

	m := &model.MsModel{
		Conn: conn,
	}
	c := &c.MsController{
		Model: m,
	}
	router := c.Serve()

	w := httptest.NewRecorder()

	req, _ := http.NewRequest("GET", "/v1/user/2", nil)

	router.ServeHTTP(w, req)

	assert.Equal(t, 200, w.Code)

	var user model.User

	if e := json.Unmarshal(w.Body.Bytes(), &user); e != nil {
		panic(err)
	}

	test_user := model.User{
		ID:        2,
		FirstName: "Danny",
		LastName:  "Rollo",
		Email:     "dannyrollo4@gmail.com",
	}
	assert.Equal(t, test_user, user)
}

func TestBadUser(t *testing.T) {
	conn, err := sql.Open("mysql", "remo:pwd@tcp(localhost:3333)/remodb")
	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to connect to database: %v\n", err)
		os.Exit(1)
	}

	defer conn.Close()

	m := &model.MsModel{
		Conn: conn,
	}
	c := &c.MsController{
		Model: m,
	}
	router := c.Serve()

	w := httptest.NewRecorder()

	req, _ := http.NewRequest("GET", "/v1/user/17", nil)

	router.ServeHTTP(w, req)

	assert.Equal(t, 200, w.Code)

	var user model.User

	if e := json.Unmarshal(w.Body.Bytes(), &user); e != nil {
		panic(err)
	}

	test_user := model.User{}
	assert.Equal(t, test_user, user)
}
