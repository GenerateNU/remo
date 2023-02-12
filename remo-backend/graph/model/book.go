package model

import (
	"time"
)

type Book struct {
	ID              string    `json:"id" gorm:"primary_key"`
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
	ReassignFieldString(input.StoryID, &target.Story_id)
	ReassignFieldString(input.Author, &target.Author)
	ReassignFieldString(input.CoverImage, &target.Cover_image)
	ReassignFieldTime(input.DateCreated, &target.Date_created)
	ReassignFieldTime(input.DateUpdated, &target.Date_updated)
	ReassignFieldString(&input.DefaultUserID, &target.Default_user_id)
	ReassignFieldString(input.Foreword, &target.Foreword)
	ReassignFieldString(input.Editor, &target.Editor)
	ReassignFieldString(input.Illustrator, &target.Illustrator)
	ReassignFieldString(input.Isbn10, &target.Isbn_10)
	ReassignFieldInt(input.Isbn13, &target.Isbn_13)
	ReassignFieldInt(input.NumPages, &target.Num_pages)
	ReassignFieldInt(input.PubDate, &target.Pub_date)
	ReassignFieldInt(input.CopyrightDate, &target.Copyright_date)
	ReassignFieldInt(input.Edition, &target.Edition)
	ReassignFieldString(input.Synopsis, &target.Synopsis)
	ReassignFieldString(input.Title, &target.Title)
	ReassignFieldInt(input.WordCount, &target.Word_count)
	ReassignFieldString(input.SubTitle, &target.Sub_title)
	ReassignFieldString(input.Asin, &target.Asin)
}
