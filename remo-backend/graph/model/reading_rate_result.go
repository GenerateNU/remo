package model

import (
	"time"
)

type ReadingRateResult struct {
	Reading_rate_results_id int `json:"reading_rate_results_id"`
	User_id                 int `json:"user_id"`
	Book_id                 int `json:"nook_id"`
	User_book_id            int `json:"user_book_id"`
	//`date` datetime DEFAULT NULL,
	Date time.Time `json:"date"`
	//`reading_location` int DEFAULT NULL COMMENT '1 = school, 2 = home',
	Reading_location int `json:"reading_location"`
	//`type_of_reading` int DEFAULT NULL COMMENT '1=myself,2=someone else, 3=to me, 4= share read',
	Type_of_reading int `json:"type_of_reading"`
	Reading_setting int `json:"reading_setting"`
	//`reading_type_details` int DEFAULT NULL COMMENT '1=Silent, 2=Aloud,3=Adult,4=teen,5=child,6=young child',
	Reading_type_details int `json:"reading_type_details"`
	//`start_time` time DEFAULT NULL,
	Start_time time.Time `json:"start_time"`
	//`end_time` time DEFAULT NULL,
	End_time                       time.Time `json:"end_time"`
	Total_time                     int       `json:"Total_time"`
	Start_page                     int       `json:"start_page"`
	End_page                       int       `json:"end_page"`
	Total_pages                    int       `json:"total_pages"`
	Word_per_page                  int       `json:"word_per_page"`
	Types_of_reading               string    `json:"types_of_reading"`
	Section_rating                 int       `json:"section_rating"`
	Check_in                       int       `json:"check_in"`
	Reader_request                 int       `json:"reader_request"`
	Reader_request_almost_finished int       `json:"reader_request_almost_finished"`
	Reader_continuum               int       `json:"reader_continuum"`
	Words_per_page                 int       `json:"words_per_page"`
	Observational_notes            string    `json:"observational_notes"`
	//`share_feedback` int DEFAULT NULL,
	Share_feedback           int    `json:"share_feedback"`
	Reader_response          string `json:"reader_response"`
	Reading_response_pages   string `json:"reading_response_pages"`
	Reading_response_type    int    `json:"reading_response_type"`
	Reading_response_subtype int    `json:"reading_response_subtype"`
	Grade_level              int    `json:"grade_level"`
	Grade_level_status       int    `json:"grade_level_status"`
	Teacher_id               int    `json:"teacher_id"`
}
