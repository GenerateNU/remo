package model

import (
	"remo/backend/graph"
	"time"
)

type Book struct {
	ID              string    `json:"id"`
	Story_id        string    `json:"story_id"`
	Author          string    `json:"author"`
	Cover_image     string    `json:"cover_image"`
	Date_created    time.Time `json:"date_created"`
	Date_updated    time.Time `json:"date_updated"`
	Default_user_id string    `json:"default_user_id"`
	Foreword        string    `json:"foreword"`
	Editor          string    `json:"editor"`
	Illustrator     string    `json:"illustrator"`
	Isbn_10         string    `json:"isbn_10"`
	Isbn_13         int       `json:"isbn_13"`
	Num_pages       int       `json:"num_pages"`
	Pub_date        int       `json:"pub_date"`
	Copyright_date  int       `json:"copyright_date"`
	Edition         int       `json:"edition"`
	Synopsis        string    `json:"synopsis"`
	Title           string    `json:"title"`
	Word_count      int       `json:"word_count"`
	Sub_title       string    `json:"sub_title"`
	Asin            string    `json:"asin"`
}

// UpdateBook
// Updates all the requested fields of this book using the BookInput
func (target *Book) UpdateBook(input BookInput) {
	graph.ReassignFieldString(input.StoryID, &target.Story_id)
	graph.ReassignFieldString(input.Author, &target.Author)
	graph.ReassignFieldString(input.CoverImage, &target.Cover_image)
	graph.ReassignFieldTime(input.DateCreated, &target.Date_created)
	graph.ReassignFieldTime(input.DateUpdated, &target.Date_updated)
	graph.ReassignFieldString(&input.DefaultUserID, &target.Default_user_id)
	graph.ReassignFieldString(input.Foreword, &target.Foreword)
	graph.ReassignFieldString(input.Editor, &target.Editor)
	graph.ReassignFieldString(input.Illustrator, &target.Illustrator)
	graph.ReassignFieldString(input.Isbn10, &target.Isbn_10)
	graph.ReassignFieldInt(input.Isbn13, &target.Isbn_13)
	graph.ReassignFieldInt(input.NumPages, &target.Num_pages)
	graph.ReassignFieldInt(input.PubDate, &target.Pub_date)
	graph.ReassignFieldInt(input.CopyrightDate, &target.Copyright_date)
	graph.ReassignFieldInt(input.Edition, &target.Edition)
	graph.ReassignFieldString(input.Synopsis, &target.Synopsis)
	graph.ReassignFieldString(input.Title, &target.Title)
	graph.ReassignFieldInt(input.WordCount, &target.Word_count)
	graph.ReassignFieldString(input.SubTitle, &target.Sub_title)
	graph.ReassignFieldString(input.Asin, &target.Asin)
}
