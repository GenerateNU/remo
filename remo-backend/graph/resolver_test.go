package graph

import (
	"context"
	"remo/backend/graph/model"
	"testing"
	"time"
)

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

	// create a new resolver
	resolver := &mutationResolver{}

	// call the resolver's CreateBook method with the book input
	book, err := resolver.CreateBook(context.Background(), bookInput)
	if err != nil {
		t.Fatalf("CreateBook failed: %v", err)
	}

	// retrieve the book from the database
	stmt, err := DB.Prepare("SELECT * FROM books WHERE story_id = ?")
	if err != nil {
		t.Fatalf("Prepare failed: %v", err)
	}
	defer stmt.Close()

	//row := stmt.QueryRow(book.ID)

	_, err = stmt.Exec(storyID)

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

	// if nothing is returned then fields tests pass

}
