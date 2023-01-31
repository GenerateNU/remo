package model

type UserBook struct {
	id      int `json:"id"`
	book_id int `json:"book_id"`
	//`book_type` int DEFAULT NULL COMMENT '1=fiction,2=non-ficiton,3=blended',
	//`checkout_status` int NOT NULL DEFAULT '4' COMMENT 'id from ''checkout_status_fields'' table.',
	condition   int    `json:"id"`
	cover_image string `json:"cover_image"`
	//`date_created` timestamp NULL DEFAULT NULL,
	//`date_updated` timestamp NULL DEFAULT NULL,
	//`format` int DEFAULT NULL COMMENT '1=hardcover,2=PaperBack,3=ebook,4=audio,5=other',
	guided_reading_level string `json:"guided_reading_level"`
	lexile_level         int    `json:"lexile_level"`
	location             int    `json:"location"`
	mentor_text          int    `json:"mentor_text"`
	multiple_pov         int    `json:"multiple_pov"`
	//price decimal(13,2) DEFAULT NULL,
	qty_label int `json:"qty_label"`
	//`series` int DEFAULT NULL,
	series_name     string `json:"classroom_school_year"`
	series_pos      int    `json:"series_pos"`
	tags            string `json:"classroom_school_year"`
	teacher_notes   string `json:"classroom_school_year"`
	teacher_read    int    `json:"teacher_read"`
	text_complexity int    `json:"text_complexity"`
	//unpaged int NOT NULL DEFAULT '0',
	unreliable_narrative int `json:"unreliable_narrative"`
	user_id              int `json:"user_id"`
	//`entered_user_id` int DEFAULT NULL COMMENT 'user that entered the book in ReMo',
	want_for_classroom int `json:"want_for_classroom"`
	//`own_this_copy` int NOT NULL DEFAULT '0' COMMENT '0=unspecified 1=user 2=school 3=School Library',
	want_to_discard int `json:"want_to_discard"`
	word_count      int `json:"word_count"`
	words_per_page  int `json:"words_per_page"`
	current_user_id int `json:"current_user_id"`
	//PRIMARY KEY (`id`),
	//KEY `tags` (`tags`(255))
}
