package model

import "time"

type Book struct {
	ID              string    `json:"id"`
	story_id        int       `json:"story_id"`
	author          string    `json:"author"`
	cover_image     string    `json:"cover_image"`
	date_created    time.Time `json:"date_created"`
	date_updated    time.Time `json:"date_updated"`
	Default_user_id int       `json:"default_user_id"`
	foreword        string    `json:"foreword"`
	editor          string    `json:"editor"`
	illustrator     string    `json:"illustrator"`
	isbn_10         string    `json:"isbn_10"`
	isbn_13         int       `json:"isbn_13"`
	num_pages       int       `json:"num_pages"`
	pub_date        int       `json:"pub_date"`
	copyright_date  int       `json:"copyright_date"`
	edition         int       `json:"edition"`
	synopsis        string    `json:"synopsis"`
	title           string    `json:"title"`
	word_count      int       `json:"word_count"`
	sub_title       string    `json:"sub_title"`
	asin            string    `json:"asin"`
}
