package model

type Student struct {
	id int `json:"classroomId"`
	//`student_id` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
	//`student_app_id` varchar(32) NOT NULL,
	//`student_calpads_ssid` varchar(32) DEFAULT NULL COMMENT 'CALPADS SSID value.',
	student_login_id int    `json:"student_login_id"`
	first_name       string `json:"first_name"`
	middle_name      string `json:"middle_name"`
	last_name        string `json:"last_name"`
	//`date_created` timestamp(6) NULL DEFAULT NULL,
	//`date_updated` timestamp(6) NULL DEFAULT NULL,
	preferred_name string `json:"preferred_name"`
	//`gender` int DEFAULT NULL,
	//`pronoun` int DEFAULT NULL,
	//`birth_date` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
	grade_level    int `json:"grade_level"`
	grade_movement int `json:"grade_movement"`
	//`guided_reading_level` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
	//`rti_srv_type` int DEFAULT NULL,
	//`student_services` varchar(32) DEFAULT NULL COMMENT 'CSL of Student Identified Services',
	//`rti_services` varchar(28) DEFAULT NULL COMMENT 'CSL of RTI Services',
	//`specialized_courses` varchar(32) DEFAULT NULL COMMENT 'c.s.l. of ids from specialized_courses_fields table',
	//`grade_level_status` int DEFAULT NULL COMMENT 'Labeled as Level of Student',
	lexile_level_min int `json:"lexile_level_min"`
	lexile_level_max int `json:"lexile_level_max"`
	//`type` int DEFAULT NULL COMMENT 'Labeled as Type of Student',
	//`weakness` int DEFAULT NULL COMMENT 'fluency or comprehension',
	//`reader_type` int DEFAULT NULL COMMENT 'Theme or Plot',
	reading_stage int `json:"reading_stage"`
	//`DELETEself_assessment` int DEFAULT NULL COMMENT 'self assessment how does student feel about reading',
	//`DELETEreader_non_reader` int DEFAULT NULL COMMENT 'self assessment reader or non-reader 1 is yes or 2 is no',
	//`DELETEread_goal` int DEFAULT NULL COMMENT 'Number of books student wants to read in a year',
	//`DELETEtype_of_reading` int DEFAULT NULL COMMENT '1-Fiction, 2-Non-Fiction,3-No Preference',
	//`DELETEbook_finish` int DEFAULT NULL COMMENT 'How often does a student finish a book? 5(Most)-1(Never)',
	//`DELETEread_speed` int DEFAULT NULL COMMENT '1.fast,2.avg,3.slow',
	//`ethnicity` int DEFAULT NULL,
	//`avatar` varchar(64) DEFAULT NULL,
	//`backup_avatar` varchar(64) DEFAULT NULL,
}
