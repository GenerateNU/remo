package model

import "time"

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

// reassignFieldString
// Helper function to update the value of the target string if the input string is not null.
func reassignFieldString(input *string, target *string) {
	if input != nil {
		// case where there is no entry in this field yet
		if target == nil {
			target = input
			// case where there is already an entry in this field
		} else {
			*target = *input
		}
	}
}

// reassignFieldInt
// Helper function to update the value of the target Int if the input Int is not null.
func reassignFieldInt(input *int, target *int) {
	if input != nil {
		// case where there is no entry in this field yet
		if target == nil {
			target = input
			// case where there is already an entry in this field
		} else {
			*target = *input
		}
	}
}

// reassignFieldTime
// Helper function to update the value of the target Time if the input Time is not null.
func reassignFieldTime(input *time.Time, target *time.Time) {
	if input != nil {
		// case where there is no entry in this field yet
		if target == nil {
			target = input
			// case where there is already an entry in this field
		} else {
			*target = *input
		}
	}
}

// UpdateBook
// Updates all the requested fields of this book using the BookInput
func (target *Book) UpdateBook(input BookInput) {
	reassignFieldString(input.StoryID, &target.Story_id)
	reassignFieldString(input.Author, &target.Author)
	reassignFieldString(input.CoverImage, &target.Cover_image)
	reassignFieldTime(input.DateCreated, &target.Date_created)
	reassignFieldTime(input.DateUpdated, &target.Date_updated)
	reassignFieldString(&input.DefaultUserID, &target.Default_user_id)
	reassignFieldString(input.Foreword, &target.Foreword)
	reassignFieldString(input.Editor, &target.Editor)
	reassignFieldString(input.Illustrator, &target.Illustrator)
	reassignFieldString(input.Isbn10, &target.Isbn_10)
	reassignFieldInt(input.Isbn13, &target.Isbn_13)
	reassignFieldInt(input.NumPages, &target.Num_pages)
	reassignFieldInt(input.PubDate, &target.Pub_date)
	reassignFieldInt(input.CopyrightDate, &target.Copyright_date)
	reassignFieldInt(input.Edition, &target.Edition)
	reassignFieldString(input.Synopsis, &target.Synopsis)
	reassignFieldString(input.Title, &target.Title)
	reassignFieldInt(input.WordCount, &target.Word_count)
	reassignFieldString(input.SubTitle, &target.Sub_title)
	reassignFieldString(input.Asin, &target.Asin)
}
