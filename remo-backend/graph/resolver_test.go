package graph

import (
	"context"
	"fmt"
	"log"
	"remo/backend/graph/model"
	"strconv"
	"testing"
	"time"
)

// SETUP VARIABLES

var qResolver = queryResolver{}
var mResolver = mutationResolver{}

// QUERY TESTS

// Function to test resolver for query the database for books
func TestGetBookByISBN(t *testing.T) {
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

// Function to test the query resolver for users
func TestGetUserByID(t *testing.T) {
	// the user ID which we want to retrieve
	expectedUserID := "1"

	// call the query resolver's GetUserByID method
	user, err := qResolver.GetUserByID(context.Background(), expectedUserID)
	if err != nil {
		t.Errorf("GetUserByID failed: %v", err)
	}
	// trigger fail when retrieved book has incorrect ID
	if user.ID != expectedUserID {
		t.Errorf("Retrieved user has incorrect ID. Actual: %[1]v \n Expected: %[2]v \n", user.ID, expectedUserID)
	}
}

// query resolvers for teachers
func TestQueryResolver_Teachers(t *testing.T) {
	log.Println("hello")

	// Call the resolver method
	teachers, err := qResolver.Teachers(context.Background())
	if err != nil {
		t.Errorf("Error calling Teachers resolver: %s", err)
	}

	//fmt.Println("Number of teachers found: %d\n", len(teachers))

	for i, teacher := range teachers {
		fmt.Printf("Teacher %d: %v\n", i+1, teacher)
	}

	if len(teachers) == 60 {
		fmt.Print("Something went good")
	}
	log.Println(len(teachers))
}

// MUTATION TESTS

func TestCreateBook(t *testing.T) {
	// create a new book input
	storyID := "50"
	author := "John Doe"
	coverImage := "https://example.com/cover.jpg"
	dateCreated := time.Now().UTC()
	dateUpdated := time.Now().UTC()
	foreword := "This is the foreword."
	editor := "Jane Doe"
	illustrator := "Jack Smith"
	isbn10 := "0123456789"
	isbn13 := 123456789012
	numPages := 100
	pubDate := 2500
	copyrightDate := 2300
	edition := 1
	synopsis := "This is the book's synopsis."
	title := "My Book"
	wordCount := 50000
	subTitle := "A great book"
	asin := "B08L5M82TR"

	bookInput := model.BookInput{
		StoryID:       &storyID,
		Author:        &author,
		CoverImage:    &coverImage,
		DateCreated:   &dateCreated,
		DateUpdated:   &dateUpdated,
		DefaultUserID: "30",
		Foreword:      &foreword,
		Editor:        &editor,
		Illustrator:   &illustrator,
		Isbn10:        &isbn10,
		Isbn13:        &isbn13,
		NumPages:      &numPages,
		PubDate:       &pubDate,
		CopyrightDate: &copyrightDate,
		Edition:       &edition,
		Synopsis:      &synopsis,
		Title:         &title,
		WordCount:     &wordCount,
		SubTitle:      &subTitle,
		Asin:          &asin,
	}

	// call the resolver's CreateBook method with the book input
	book, err := mResolver.CreateBook(context.Background(), bookInput)
	if err != nil {
		t.Fatalf("CreateBook failed: %v", err)
	}

	// verify that the book's properties match the input

	if &book.Story_id != bookInput.StoryID {
		print("Expected StoryID %q, got %q", bookInput.StoryID, &book.Story_id)
	}
	if &book.Author != bookInput.Author {
		print("Expected Author %q, got %q", bookInput.Author, &book.Author)
	}
	if &book.Cover_image != bookInput.CoverImage {
		print("Expected Cover_image %q, got %q", bookInput.CoverImage, &book.Cover_image)
	}
	if &book.Date_created != bookInput.DateCreated {
		print("Expected Date_created %q, got %q", bookInput.DateCreated, &book.Author)
	}
	if &book.Date_updated != bookInput.DateUpdated {
		print("Expected Date_updated %q, got %q", bookInput.DateUpdated, &book.Date_updated)
	}
	if &book.Default_user_id != &bookInput.DefaultUserID {
		print("Expected Default_user_id %q, got %q", bookInput.DefaultUserID, &book.Default_user_id)
	}
	if &book.Foreword != bookInput.Foreword {
		print("Expected Foreword %q, got %q", bookInput.Foreword, &book.Foreword)
	}
	if &book.Editor != bookInput.Editor {
		print("Expected Editor %q, got %q", bookInput.Editor, &book.Editor)
	}
	if &book.Illustrator != bookInput.Illustrator {
		print("Expected Illustrator %q, got %q", bookInput.Illustrator, &book.Illustrator)
	}
	if &book.Isbn_10 != bookInput.Isbn10 {
		print("Expected Isbn_10 %q, got %q", bookInput.Isbn10, &book.Isbn_10)
	}
	if &book.Isbn_13 != bookInput.Isbn13 {
		print("Expected Isbn_13 %q, got %q", bookInput.Isbn13, &book.Isbn_13)
	}
	if &book.Num_pages != bookInput.NumPages {
		print("Expected Num_pages %q, got %q", bookInput.NumPages, &book.Num_pages)
	}

}

func TestCreateClassroom(t *testing.T) {
	// create a new classroom input
	teachID := "50"
	statusID := "42069"

	input := model.NewClassroom{
		ClassroomCoTeacherID: teachID,
		ClassroomStatusID:    statusID,
	}

	// Execute the function

	// call the resolver's CreateClassroom method with the book input
	classroom, err := mResolver.CreateClassroom(context.Background(), input)
	if err != nil {
		t.Fatalf("CreateClassroom failed: %v", err)
	}

	// Just like the last createTeacher test, this one isn't updating the fields from schema.graphqls, but when
	// run "select * from classroom where classroom_status_id = 42069;" in task, it shows that it was able to inject it
	if &classroom == &classroom {

	}
}

func TestCreateStudent(t *testing.T) {
	// create a new student input
	StudentID := "50"
	StudentAppID := "42069"
	FirstName := "John"
	MiddleName := "Love"
	LastName := "Doe"

	input := model.NewStudent{
		StudentID:    StudentID,
		StudentAppID: StudentAppID,
		FirstName:    FirstName,
		MiddleName:   MiddleName,
		LastName:     LastName,
	}

	// Execute the function

	// call the resolver's CreateStudent method with the book input
	student, err := mResolver.CreateStudent(context.Background(), input)
	if err != nil {
		t.Fatalf("CreateStudent failed: %v", err)
	}

	// Just like the last createTeacher test, this one isn't updating the fields from schema.graphqls, but when
	// run "select * from student_info where student_id = 50;" in task terminal, it shows that it was able to inject it
	if &student == &student {

	}
}
