package model

import "time"

type Book struct {
	ID              string    `json:"id"`
	Story_id        int       `json:"story_id"`
	Author          string    `json:"author"`
	Cover_image     string    `json:"cover_image"`
	Date_created    time.Time `json:"date_created"`
	Date_updated    time.Time `json:"date_updated"`
	Default_user_id int       `json:"default_user_id"`
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
