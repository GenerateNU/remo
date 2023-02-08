// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package model

import (
	"time"
)

type BookInput struct {
	ID            string     `json:"id"`
	StoryID       *int       `json:"story_id"`
	Author        *string    `json:"author"`
	CoverImage    *string    `json:"cover_image"`
	DateCreated   *time.Time `json:"date_created"`
	DateUpdated   *time.Time `json:"date_updated"`
	DefaultUserID int        `json:"default_user_id"`
	Foreword      *string    `json:"foreword"`
	Editor        *string    `json:"editor"`
	Illustrator   *string    `json:"illustrator"`
	Isbn10        *string    `json:"isbn_10"`
	Isbn13        *int       `json:"isbn_13"`
	NumPages      *int       `json:"num_pages"`
	PubDate       *int       `json:"pub_date"`
	CopyrightDate *int       `json:"copyright_date"`
	Edition       *int       `json:"edition"`
	Synopsis      *string    `json:"synopsis"`
	Title         *string    `json:"title"`
	WordCount     *int       `json:"word_count"`
	SubTitle      *string    `json:"sub_title"`
	Asin          *string    `json:"asin"`
}

type NewClassroom struct {
	ClassroomID          string `json:"classroom_id"`
	ClassroomCoTeacherID string `json:"Classroom_co_teacher_id"`
	ClassroomStatusID    string `json:"classroom_status_id"`
}

type NewStudent struct {
	ID           string `json:"id"`
	StudentID    string `json:"Student_id"`
	StudentAppID string `json:"student_app_id"`
	FirstName    string `json:"First_name"`
	MiddleName   string `json:"Middle_name"`
	LastName     string `json:"last_name"`
}

type NewTeacher struct {
	ID                   string    `json:"id"`
	ClassroomCoTeacherID string    `json:"classroom_co_teacher_id"`
	ClassroomStatusID    string    `json:"classroom_status_id"`
	TeacherFirstName     string    `json:"Teacher_first_name"`
	TeacherLastName      string    `json:"Teacher_last_name"`
	Active               int       `json:"Active"`
	TeacherDateCreated   time.Time `json:"Teacher_date_created"`
	TeacherDateUpdated   time.Time `json:"Teacher_date_updated"`
}

type User struct {
	ID        string `json:"id"`
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
	Email     string `json:"email"`
}

type NewReadingRateResults struct {
	ReadingRateResultsID string `json:"Reading_rate_results_id"`
}
