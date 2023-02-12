package model

type Book struct {
	BookId  string `json:"id" db:"id"`
	Title   string `json:"title" db:"title"`
	Author  string `json:"author" db:"author"`
	ISBN_13 string `json:"isbn_13" db:"isbn_13"`
}

type User struct {
	ID        int    `json:"id"`
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
	Email     string `json:"email"`
}

type LoginInfo struct {
	Credential string `json:"credential"`
}
