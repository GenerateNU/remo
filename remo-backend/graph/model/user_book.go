package model

import (
	"time"
)

type UserBook struct {
	Id      int `json:"id"`
	Book_id int `json:"book_id"`
	//COMMENT '1=fiction,2=non-ficiton,3=blended',
	Book_type int `json:"book_type"`
	//NOT NULL DEFAULT '4' COMMENT 'id from ''checkout_status_fields'' table.',
	Checkout_status int    `json:"checkout_status"`
	Condition       int    `json:"condition"`
	Cover_image     string `json:"cover_image"`
	//`date_created` timestamp NULL DEFAULT NULL,
	Date_created time.Time `json:"date_created"`
	//`date_updated` timestamp NULL DEFAULT NULL,
	Date_updated time.Time `json:"date_updated"`
	//`format` int DEFAULT NULL COMMENT '1=hardcover,2=PaperBack,3=ebook,4=audio,5=other',
	Format               int    `json:"format"`
	Guided_reading_level string `json:"guided_reading_level"`
	Lexile_level         int    `json:"lexile_level"`
	Location             int    `json:"location"`
	Mentor_text          int    `json:"mentor_text"`
	Multiple_pov         int    `json:"multiple_pov"`
	//price decimal(13,2) DEFAULT NULL,
	Price     float64 `json:"price"`
	Gty_label int     `json:"qty_label"`
	//`series` int DEFAULT NULL,
	Series          int    `json:"series"`
	Series_name     string `json:"classroom_school_year"`
	Series_pos      int    `json:"series_pos"`
	Tags            string `json:"tags"`
	Teacher_notes   string `json:"teacher_notes"`
	Teacher_read    int    `json:"teacher_read"`
	Text_complexity int    `json:"text_complexity"`
	//unpaged int NOT NULL DEFAULT '0',
	Unpaged              int `json:"unpaged"`
	Unreliable_narrative int `json:"unreliable_narrative"`
	User_id              int `json:"user_id"`
	//`entered_user_id` int DEFAULT NULL COMMENT 'user that entered the book in ReMo',
	Entered_user_id    int `json:"entered_user_id"`
	Want_for_classroom int `json:"want_for_classroom"`
	//`own_this_copy` int NOT NULL DEFAULT '0' COMMENT '0=unspecified 1=user 2=school 3=School Library',
	Own_this_copy   int `json:"own_this_copy"`
	Want_to_discard int `json:"want_to_discard"`
	Word_count      int `json:"word_count"`
	Words_per_page  int `json:"words_per_page"`
	Current_user_id int `json:"current_user_id"`
	//PRIMARY KEY (`id`),
	//KEY `tags` (`tags`(255))
}
