package graph

//go:generate go run github.com/99designs/gqlgen generate
import (
	"remo/backend/graph/model"
	"time"
)

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct {
	//Books map[string]*model.Book
	Books    []*model.Book
	teachers []*model.Teacher
	users    []*model.User
	/**
	SHOULD ABSOLUTELY CHANGE BOOKS AND USERS TO A MAP
	*/
	//users map[string]*model.User
}

// reassignFieldString
// Helper function to update the value of the target string if the input string is not null.
func reassignFieldString(input *string, target string) {
	if input != nil {
		target = *input
	}
}

// Helper function to update the value of the target int if the input int is not null.
func reassignFieldInt(input *int, target int) {
	if input != nil {
		target = *input
	}
}

// Helper function to update the value of the target time if the input time is not null.
func reassignFieldTime(input *time.Time, target time.Time) {
	if input != nil {
		target = *input
	}
}

// UpdateRequestedBookFields
// Function to update the requested fields of a book.
//func UpdateRequestedBookFields(input model.BookInput, target *model.Book) {
//	reassignFieldString(input.StoryID, target.Story_id)
//	reassignFieldString(input.Author, target.Author)
//	reassignFieldString(input.CoverImage, target.Cover_image)
//	reassignFieldTime(input.DateCreated, target.Date_created)
//	reassignFieldTime(input.DateUpdated, target.Date_updated)
//	reassignFieldString(&input.DefaultUserID, target.Default_user_id)
//	reassignFieldString(input.Foreword, target.Foreword)
//	reassignFieldString(input.Editor, target.Editor)
//	reassignFieldString(input.Illustrator, target.Illustrator)
//	reassignFieldString(input.Isbn10, target.Isbn_10)
//	reassignFieldInt(input.Isbn13, target.Isbn_13)
//	reassignFieldInt(input.NumPages, target.Num_pages)
//	reassignFieldInt(input.PubDate, target.Pub_date)
//	reassignFieldInt(input.CopyrightDate, target.Copyright_date)
//	reassignFieldInt(input.Edition, target.Edition)
//	reassignFieldString(input.Synopsis, target.Synopsis)
//	reassignFieldString(input.Title, target.Title)
//	reassignFieldInt(input.WordCount, target.Word_count)
//	reassignFieldString(input.SubTitle, target.Sub_title)
//	reassignFieldString(input.Asin, target.Asin)
//	//if input.Foreword != nil {
//	//	*input.Foreword = target.Foreword
//	//}
//	//if input.Editor != nil {
//	//	*input.Editor = target.Editor
//	//}
//	//if input.Illustrator != nil {
//	//	*input.Illustrator = target.Illustrator
//	//}
//	//if input.Isbn10 != nil {
//	//	*input.Isbn10 = target.Isbn_10
//	//}
//	//if input.Isbn13 != nil {
//	//	*input.Isbn13 = target.Isbn_13
//	//}
//	//if input.NumPages != nil {
//	//	*input.NumPages = target.Num_pages
//	//}
//	//if input.PubDate != nil {
//	//	*input.PubDate = target.Pub_date
//	//}
//	//if input.CopyrightDate != nil {
//	//	*input.CopyrightDate = target.Copyright_date
//	//}
//	//if input.Edition != nil {
//	//	*input.Edition = target.Edition
//	//}
//	//if input.Synopsis != nil {
//	//	*input.Synopsis = target.Synopsis
//	//}
//	//if input.Title != nil {
//	//	*input.Title = target.Title
//	//}
//	//if input.WordCount != nil {
//	//	*input.WordCount = target.Word_count
//	//}
//	//if input.SubTitle != nil {
//	//	*input.SubTitle = target.Sub_title
//	//}
//	//if input.Asin != nil {
//	//	*input.Asin = target.Asin
//}
