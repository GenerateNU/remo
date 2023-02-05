package model

import (
	"time"
)

type Student struct {
	Id int `json:"classroomId"`
	//`student_id` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
	Student_id string `json:"student_id"`
	//`student_app_id` varchar(32) NOT NULL,
	Student_app_id string `json:"student_app_id"`
	//`student_calpads_ssid` varchar(32) DEFAULT NULL COMMENT 'CALPADS SSID value.',
	Student_calpads_ssid string `json:"student_calpads_ssid"`
	Student_login_id     int    `json:"student_login_id"`
	First_name           string `json:"first_name"`
	Middle_name          string `json:"middle_name"`
	Last_name            string `json:"last_name"`
	//`date_created` timestamp(6) NULL DEFAULT NULL,
	Date_created time.Time `json:"date_created"`
	//`date_updated` timestamp(6) NULL DEFAULT NULL,
	Date_updated   time.Time `json:"date_updated"`
	Preferred_name string    `json:"preferred_name"`
	//`gender` int DEFAULT NULL,
	Gender int `json:"gender"`
	//`pronoun` int DEFAULT NULL,
	Pronoun int `json:"pronoun"`
	//`birth_date` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
	Birth_date     string `json:"birth_date"`
	Grade_level    int    `json:"grade_level"`
	Grade_movement int    `json:"grade_movement"`
	//`guided_reading_level` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
	Guided_reading_level string `json:"guided_reading_level"`
	//`rti_srv_type` int DEFAULT NULL,
	Rti_srv_type string `json:"rti_srv_type"`
	//`student_services` varchar(32) DEFAULT NULL COMMENT 'CSL of Student Identified Services',
	Student_services string `json:"student_services"`
	//`rti_services` varchar(28) DEFAULT NULL COMMENT 'CSL of RTI Services',
	Rti_services string `json:"rti_services"`
	//`specialized_courses` varchar(32) DEFAULT NULL COMMENT 'c.s.l. of ids from specialized_courses_fields table',
	Specialized_courses string `json:"specialized_courses"`
	//`grade_level_status` int DEFAULT NULL COMMENT 'Labeled as Level of Student',
	Grade_level_status int `json:"grade_level_status"`
	Lexile_level_min   int `json:"lexile_level_min"`
	Lexile_level_max   int `json:"lexile_level_max"`
	//`type` int DEFAULT NULL COMMENT 'Labeled as Type of Student',
	Type int `json:"type"`
	//`weakness` int DEFAULT NULL COMMENT 'fluency or comprehension',
	Weakness int `json:"weakness"`
	//`reader_type` int DEFAULT NULL COMMENT 'Theme or Plot',
	Reader_type   int `json:"reader_type"`
	Reading_stage int `json:"reading_stage"`
	//`DELETEself_assessment` int DEFAULT NULL COMMENT 'self assessment how does student feel about reading',
	//`DELETEreader_non_reader` int DEFAULT NULL COMMENT 'self assessment reader or non-reader 1 is yes or 2 is no',
	//`DELETEread_goal` int DEFAULT NULL COMMENT 'Number of books student wants to read in a year',
	//`DELETEtype_of_reading` int DEFAULT NULL COMMENT '1-Fiction, 2-Non-Fiction,3-No Preference',
	//`DELETEbook_finish` int DEFAULT NULL COMMENT 'How often does a student finish a book? 5(Most)-1(Never)',
	//`DELETEread_speed` int DEFAULT NULL COMMENT '1.fast,2.avg,3.slow',
	//`ethnicity` int DEFAULT NULL,
	Ethnicity int `json:"ethnicity"`
	//`avatar` varchar(64) DEFAULT NULL,
	Avatar string `json:"avatar"`
	//`backup_avatar` varchar(64) DEFAULT NULL,
	Backup_avatar string `json:"backup_avatar"`
}
