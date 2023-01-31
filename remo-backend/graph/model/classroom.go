package model

type Classroom struct {
	classroomId         int `json:"classroomId"`
	classroom_school_id int `json:"classroom_school_id"`
	// DOUBLE CHECK THE TYPE ON THIS
	classroom_school_year  string `json:"classroom_school_year"`
	classroom_start_date   string `json:"classroom_start_date"`
	classroom_end_date     string `json:"classroom_end_date"`
	classroom_name         string `json:"classroom_name"`
	classroom_subject      string `json:"classroom_subject"`
	classroom_display_name string `json:"classroom_display_name"`
	classroom_avg_length   string `json:"classroom_avg_length"`
	// HOW TO DEAL WITH THIS? WHICH TYPES CAN BE ENCODED INTO A JSON?
	//classroom_avg_frequency int DEFAULT NULL COMMENT '1 = weekly 2 = bi-weekly 3 = monthly 4 = yearly',
	classroom_avg_days         int    `json:"classroom_avg_days"`
	classroom_grade_level_type int    `json:"classroom_grade_level_type"`
	classroom_grade_level      string `json:"classroom_grade_level"`
	classroom_co_teacher_id    int    `json:"classroom_co_teacher_id"`
	classroom_teacher_idV1     int    `json:"classroom_teacher_idV1"`
	classroom_num_students     int    `json:"classroom_num_students"`
	classroom_num_seats        int    `json:"classroom_num_seats"`
	// HOW TO DEAL WITH THIS? WHICH TYPES CAN BE ENCODED INTO A JSON?
	//classroom_student_sign_in_mode int DEFAULT NULL COMMENT '1 - Shared (QR or Google code), 2 - Single-user (email/pass).',
	//classroom_can_share_books int DEFAULT NULL COMMENT '1 = yes, anything else is no.',
	//classroom_can_view_prompt_replies int DEFAULT NULL COMMENT '1 = yes, anything else is no.',
	//classroom_can_view_survey_results int DEFAULT NULL COMMENT '1 = yes, anything else is no.',
	//classroom_can_view_teacher_bookshelves int DEFAULT NULL COMMENT '1 = yes, anything else is no.',
	//classroom_enable_family_access int DEFAULT NULL COMMENT '1 = yes, anything else is no.',
	//classroom_status_id int NOT NULL DEFAULT '0' COMMENT '0 = inactive, 1= active, 2 =archived',
	classroom_conf_frequency_above     int `json:"classroom_conf_frequency_above"`
	classroom_conf_frequency_on        int `json:"classroom_conf_frequency_on"`
	classroom_conf_frequency_below     int `json:"classroom_conf_frequency_below"`
	classroom_conf_frequency_far_below int `json:"classroom_conf_frequency_far_below"`
}
