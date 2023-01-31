package model

type ReadingRateResult struct {
	reading_rate_results_id int `json:"reading_rate_results_id"`
	user_id                 int `json:"reading_rate_results_id"`
	book_id                 int `json:"reading_rate_results_id"`
	user_book_id            int `json:"reading_rate_results_id"`
	//`date` datetime DEFAULT NULL,
	//`reading_location` int DEFAULT NULL COMMENT '1 = school, 2 = home',
	//`type_of_reading` int DEFAULT NULL COMMENT '1=myself,2=someone else, 3=to me, 4= share read',
	reading_setting int `json:"reading_rate_results_id"`
	//`reading_type_details` int DEFAULT NULL COMMENT '1=Silent, 2=Aloud,3=Adult,4=teen,5=child,6=young child',
	//`start_time` time DEFAULT NULL,
	//`end_time` time DEFAULT NULL,
	total_time                     int    `json:"reading_rate_results_id"`
	start_page                     int    `json:"start_page"`
	end_page                       int    `json:"end_page"`
	total_pages                    int    `json:"total_pages"`
	word_per_page                  int    `json:"word_per_page"`
	types_of_reading               string `json:"types_of_reading"`
	section_rating                 int    `json:"section_rating"`
	check_in                       int    `json:"check_in"`
	reader_request                 int    `json:"reader_request"`
	reader_request_almost_finished int    `json:"reader_request_almost_finished"`
	reader_continuum               int    `json:"reader_continuum"`
	words_per_page                 int    `json:"words_per_page"`
	observational_notes            string `json:"observational_notes"`
	//`share_feedback` int DEFAULT NULL,
	reader_response          string `json:"reader_response"`
	reading_response_pages   string `json:"reading_response_pages"`
	reading_response_type    int    `json:"reading_response_type"`
	reading_response_subtype int    `json:"reading_response_subtype"`
	grade_level              int    `json:"grade_level"`
	grade_level_status       int    `json:"grade_level_status"`
	teacher_id               int    `json:"teacher_id"`
}
