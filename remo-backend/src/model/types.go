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

type OnboardingQuestions struct {
	Q1 string `json:"q1"`
	Q2 string `json:"q2"`
	Q3 string `json:"q3"`
	Q4 string `json:"q4"`
	Q5 string `json:"q5"`
	Q6 string `json:"q6"`
	Q7 string `json:"q7"`
	Q8 string `json:"q8"`
}
