package model

type Teacher struct {
	Teacher_id            int    `json:"teacher_id"`
	Teacher_login_id      int    `json:"teacher_login_id"`
	Teacher_title         string `json:"teacher_title"`
	Teacher_first_name    string `json:"teacher_first_name"`
	Teacher_middle_name   string `json:"teacher_middle_name"`
	Teacher_last_name     string `json:"teacher_last_name"`
	Teacher_suffix        string `json:"teacher_suffix"`
	Teacher_date_of_birth string `json:"teacher_date_of_birth"`
	//Teacher_date_started_teaching string `json:"teacher_date_started_teaching"`
	Degree_level_id             int    `json:"degree_level_id"`
	Is_certified                bool   `json:"is_certified"`
	Certification_id            int    `json:"certification_id"`
	Certification_start         string `json:"certification_start"`
	Certification_end           string `json:"certification_end"`
	Teacher_avatar              string `json:"teacher_avatar"`
	Teacher_backup_avater       string `json:"teacher_backup_avater"`
	Teacher_subscription_type   int    `json:"teacher_subscription_type"`
	Teacher_code_name           string `json:"teacher_code_name"`
	Teacher_display_name        string `json:"teacher_display_name"`
	Quarantined_books           bool   `json:"quarantined_books"`
	Teacher_backup_email        string `json:"teacher_backup_email"`
	Teacher_gender              string `json:"teacher_gender"`
	Teacher_pronoun             string `json:"teacher_pronoun"`
	Teacher_position            int    `json:"teacher_position"`
	Teacher_grade_band          string `json:"teacher_grade_band"`
	Teacher_subjects            string `json:"teacher_subjects"`
	Teacher_provided_services   string `json:"teacher_provided_services"`
	Teacher_specialized_courses string `json:"teacher_specialized_courses"`
	Teacher_state_id            string `json:"teacher_state_id"`
	Teacher_district            string `json:"teacher_district"`
	Teacher_school              string `json:"teacher_school"`
	Teacher_cell_phone          string `json:"teacher_cell_phone"`
	Teacher_texts_enabled       int    `json:"teacher_texts_enabled"`
	Active                      bool   `json:"active"`
	Teacher_date_created        string `json:"teacher_date_created"`
	Teacher_date_updated        string `json:"teacher_date_updated"`
}
