package graph

import (
	"context"
	"database/sql"
	"fmt"
	"remo/backend/graph/model"
	"testing"

	_ "github.com/go-sql-driver/mysql"
)

// Test that we are able to successfully connected to database
func TestDbInitConnection(t *testing.T) {
	db, err := sql.Open("mysql", "remo:pwd@tcp(localhost:3333)/remodb")
	if err != nil {
		t.Fatal("Failed to connect to database:", err)
	}
	defer db.Close()

	err = db.Ping()
	if err != nil {
		t.Fatal("Failed to ping database:", err)
	}

	// var db, err = DbInitConnection()
	// if err != nil {
	// 	t.Errorf("Connection was not successfully established to Remo db.")
	// }

	// // Not sure if this test is necessary? Concerning that it fails tho
	// err2 := db.Ping()
	// if err2 != nil {
	// 	t.Errorf("Ping message was not successfully sent to Remo db.")
	// }
}

func TestCreateBook(t *testing.T) {

	// Set up the mutation resolver with the mock database connection
	resolver := &mutationResolver{}

	// Set up the input for the CreateBook method
	input := model.BookInput{
		ID:            "123",
		DefaultUserID: "456",
	}
	fmt.Printf("totally not explicit message \n")

	// Call the CreateBook method with the input
	book, err := resolver.CreateBook(context.Background(), input)
	if err != nil {
		t.Fatalf("CreateBook returned an error: %v", err)
	}

	// Check the output
	if book == nil {
		t.Fatal("CreateBook did not return a book")
	}
	if book.ID != input.ID {
		t.Errorf("CreateBook returned a book with ID %s, expected %s", book.ID, input.ID)
	}
	if book.Default_user_id != input.DefaultUserID {
		t.Errorf("CreateBook returned a book with default_user_id %s, expected %s", book.Default_user_id, input.DefaultUserID)
	}
}
