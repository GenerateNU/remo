package graph

import (
	"remo/backend/graph/model"
	"testing"

	_ "github.com/go-sql-driver/mysql"
)

// Test that we are able to successfully connect to the database and query for a book
func TestDbInitConnection(t *testing.T) {
	db, err := DbInitConnection()

	// query for book with id 1
	rows, err := db.Query("SELECT * FROM books WHERE id = 1")
	if err != nil {
		t.Errorf("Failed to query database: %q\n", err)
	}
	// not sure if this is necessary
	defer rows.Close()

	testBook := model.Book{}

	for rows.Next() {
		//var col1, col2 string
		var a interface{}
		err := rows.Scan(&testBook.ID, &a, &testBook.Author, &a, &a, &a, &a, &a, &a, &a, &a, &a, &a, &a, &a, &a, &a, &a, &a, &a, &a)
		if err != nil {
			t.Errorf("Rip: %q\n", err)
		}

	}

	if testBook.ID != "1" {
		t.Errorf("Test book ID is not 1. Actual ID: %q\n", testBook.ID)
	}

	if testBook.Author != "Carrie S. Allen" {
		t.Errorf("Test book author is not correct. Actual Author: %q\n", testBook.Author)
	}

	if testBook.ID == "" {
		t.Fatalf("Test book ID is null.")
	}
}
