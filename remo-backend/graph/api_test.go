package graph

//  https://8d0f-155-33-134-27.ngrok.io
import (
	"context"
	"strconv"
	"testing"
)

// TESTS NEEDED
// accurate get requests
// accurate post requests

// get request test
func TestGetRequestGetBookByISBN(t *testing.T) {

	// DOES NOT ACTUALLY CONTAIN A GET REQUEST RN

	// isbn_13 of the book we want to retrieve
	expectedISBN_13 := 9781525303890

	// call the resolver's GetBookByID method with the requested expectedBookID
	book, err := qResolver.GetBookByIsbn(context.Background(), expectedISBN_13)
	if err != nil {
		t.Errorf("GetBookByISBN failed: %v", err)
	}
	// trigger fail when retrieved book has incorrect ISBN_13
	if book.Isbn_13 != expectedISBN_13 {
		t.Errorf("Retrieved book has incorrect isbn_13. Actual: %[1]v \n Expected: %[2]v \n", book.ID, expectedISBN_13)
	}

	// same as above, just with incorrect isbn_10 number to check searching for isbn_10
	unexpectedISBN_13 := 1525303899
	book2, err2 := qResolver.GetBookByIsbn(context.Background(), unexpectedISBN_13)
	// Error when getBookByISBN fails
	if err2 != nil {
		t.Errorf("GetBookByISBN failed: %v", err2)
	}
	// trigger fail when retrieved book has incorrect ISBN_10
	// should be triggered after checking for isbn_13
	var isbn10_test = strconv.Itoa(unexpectedISBN_13)
	if book2.Isbn_10 != isbn10_test {
		t.Errorf("Retrieved book has incorrect isbn_10. Actual: %[1]v \n Expected: %[2]v \n", book.ID, isbn10_test)
	}
}
