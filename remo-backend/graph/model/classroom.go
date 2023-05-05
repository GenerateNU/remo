package model

import (
	"time"
)

type Classroom struct {
	ClassroomId         int `json:"classroomId"`
	Classroom_school_id int `json:"classroom_school_id"`
	// DOUBLE-CHECK THE TYPE ON THIS
	Classroom_school_year  time.Time `json:"classroom_school_year"`
	Classroom_start_date   time.Time `json:"classroom_start_date"`
	Classroom_end_date     time.Time `json:"classroom_end_date"`
	Classroom_name         time.Time `json:"classroom_name"`
	Classroom_subject      time.Time `json:"classroom_subject"`
	Classroom_display_name time.Time `json:"classroom_display_name"`
	Classroom_avg_length   time.Time `json:"classroom_avg_length"`
	// HOW TO DEAL WITH THIS? WHICH TYPES CAN BE ENCODED INTO A JSON?
	// Might be a way apparently where it just knows which numbers correspond to which values
	//classroom_avg_frequency int DEFAULT NULL COMMENT '1 = weekly 2 = bi-weekly 3 = monthly 4 = yearly',
	Classroom_avg_days         int    `json:"classroom_avg_days"`
	Classroom_grade_level_type int    `json:"classroom_grade_level_type"`
	Classroom_grade_level      string `json:"classroom_grade_level"`
	Classroom_co_teacher_id    int    `json:"classroom_co_teacher_id"`
	Classroom_teacher_idV1     int    `json:"classroom_teacher_idV1"`
	Classroom_num_students     int    `json:"classroom_num_students"`
	Classroom_num_seats        int    `json:"classroom_num_seats"`
	// HOW TO DEAL WITH THIS? WHICH TYPES CAN BE ENCODED INTO A JSON?
	//classroom_student_sign_in_mode int DEFAULT NULL COMMENT '1 - Shared (QR or Google code), 2 - Single-user (email/pass).',
	//classroom_can_share_books int DEFAULT NULL COMMENT '1 = yes, anything else is no.',
	//classroom_can_view_prompt_replies int DEFAULT NULL COMMENT '1 = yes, anything else is no.',
	//classroom_can_view_survey_results int DEFAULT NULL COMMENT '1 = yes, anything else is no.',
	//classroom_can_view_teacher_bookshelves int DEFAULT NULL COMMENT '1 = yes, anything else is no.',
	//classroom_enable_family_access int DEFAULT NULL COMMENT '1 = yes, anything else is no.',
	//classroom_status_id int NOT NULL DEFAULT '0' COMMENT '0 = inactive, 1= active, 2 =archived',
	Classroom_conf_frequency_above     int `json:"classroom_conf_frequency_above"`
	Classroom_conf_frequency_on        int `json:"classroom_conf_frequency_on"`
	Classroom_conf_frequency_below     int `json:"classroom_conf_frequency_below"`
	Classroom_conf_frequency_far_below int `json:"classroom_conf_frequency_far_below"`
}
