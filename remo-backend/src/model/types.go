package model

type Book struct {
	BookId      string `json:"id" db:"id"`
	Title       string `json:"title" db:"title"`
	Author      string `json:"author" db:"author"`
	ISBN_13     string `json:"isbn_13" db:"isbn_13"`
	ISBN_10     string `json:"isbn_10" db:"isbn_10"`
	Subtitle    string `json:"subtitle" db:"sub_title"`
	PublishDate string `json:"publish_date" db:"pub_date"`
	PageCount   string `json:"page_count" db:"num_pages"`
	Synopsis    string `json:"synopsis" db:"synopsis"`
	UserID      string `json:"user_id" db:"default_user_id"`
}

type User struct {
	ID        int    `json:"id"`
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
	Email     string `json:"email"`
}

type LoginInfo struct {
	Credential string `json:"credential"`
	Email      string `json:"email"`
	FirstName  string `json:"first"`
	LastName   string `json:"last"`
	Picture    string `json:"picture"`
	ID         string `json:"id"`
}

/*
CREATE TABLE `reading_response_results` (
  `id` int(11) NOT NULL,
  `rr_response_id` int(11) NOT NULL,
  `field_id` int(11) NOT NULL,
  `response` text NOT NULL,
  `date_created` timestamp NULL DEFAULT NULL,
  `date_updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `reading_rate_results` (
  `reading_rate_results_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `book_id` int(11) DEFAULT NULL,
  `user_book_id` int(11) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `reading_location` int(11) DEFAULT NULL COMMENT '1 = school, 2 = home',
  `type_of_reading` int(11) DEFAULT NULL COMMENT '1=myself,2=someone else, 3=to me, 4= share read',
  `reading_setting` int(11) DEFAULT NULL,
  `reading_type_details` int(11) DEFAULT NULL COMMENT '1=Silent, 2=Aloud,3=Adult,4=teen,5=child,6=young child',
  `start_time` time DEFAULT NULL,
  `end_time` time DEFAULT NULL,
  `total_time` int(11) DEFAULT NULL,
  `start_page` int(11) DEFAULT NULL,
  `end_page` int(11) DEFAULT NULL,
  `total_pages` int(11) DEFAULT NULL,
  `word_per_page` int(11) DEFAULT NULL,
  `types_of_reading` varchar(50) DEFAULT NULL,
  `section_rating` int(11) DEFAULT NULL,
  `check_in` int(11) DEFAULT NULL,
  `reader_request` int(11) DEFAULT NULL,
  `reader_request_almost_finished` int(11) DEFAULT NULL,
  `reader_continuum` int(11) DEFAULT NULL,
  `words_per_page` int(11) DEFAULT NULL,
  `observational_notes` text,
  `share_feedback` int(11) DEFAULT NULL,
  `reader_response` text,
  `reading_response_pages` varchar(11) DEFAULT NULL,
  `reading_response_type` int(11) DEFAULT NULL,
  `reading_response_subtype` int(11) DEFAULT NULL,
  `grade_level` int(32) DEFAULT NULL,
  `grade_level_status` int(32) DEFAULT NULL,
  `teacher_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Hold data from reading rate form';

*/
