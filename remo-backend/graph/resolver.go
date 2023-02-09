package graph

//go:generate go run github.com/99designs/gqlgen generate
import (
	"remo/backend/graph/model"
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

func reassignField(input interface{}, target interface{}) {
	if input != nil {
		input = target
	}
}

/*
*
Function to update the requested fields. Leaves nil fields alone.
*/
func UpdateRequestedBookFields(input model.BookInput, target *model.Book) {
	reassignField(input.StoryID, target.Story_id)
	if input.Author != nil {
		*input.Author = target.Author
	}
	if input.CoverImage != nil {
		*input.CoverImage = target.Cover_image
	}
	if input.DateCreated != nil {
		*input.DateCreated = target.Date_created
	}
	if input.DateUpdated != nil {
		*input.DateUpdated = target.Date_updated
	}
	if input.Foreword != nil {
		*input.Foreword = target.Foreword
	}
	if input.Editor != nil {
		*input.Editor = target.Editor
	}
	if input.Illustrator != nil {
		*input.Illustrator = target.Illustrator
	}
	if input.Isbn10 != nil {
		*input.Isbn10 = target.Isbn_10
	}
	if input.Isbn13 != nil {
		*input.Isbn13 = target.Isbn_13
	}
	if input.NumPages != nil {
		*input.NumPages = target.Num_pages
	}
	if input.PubDate != nil {
		*input.PubDate = target.Pub_date
	}
	if input.CopyrightDate != nil {
		*input.CopyrightDate = target.Copyright_date
	}
	if input.Edition != nil {
		*input.Edition = target.Edition
	}
	if input.Synopsis != nil {
		*input.Synopsis = target.Synopsis
	}
	if input.Title != nil {
		*input.Title = target.Title
	}
	if input.WordCount != nil {
		*input.WordCount = target.Word_count
	}
	if input.SubTitle != nil {
		*input.SubTitle = target.Sub_title
	}
	if input.Asin != nil {
		*input.Asin = target.Asin
	}
}
