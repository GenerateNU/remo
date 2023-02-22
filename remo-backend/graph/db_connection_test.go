package graph

import (
	"context"
	"fmt"
	"remo/backend/graph/model"
	"testing"

	_ "github.com/go-sql-driver/mysql"
)

// Test that we are able to successfully connected to database
func TestDbInitConnection(t *testing.T) {
	var db, err = DbInitConnection()
	if err != nil {
		t.Errorf("Connection was not successfully established to Remo db.")
	}
	db.Ping()
}

func TestCreateBook(t *testing.T) {

	// Set up the mutation resolver with the mock database connection
	resolver := &mutationResolver{}

	// Set up the input for the CreateBook method
	input := model.BookInput{
		ID:            "123",
		DefaultUserID: "456",
	}
	fmt.Printf("penis \n")

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
