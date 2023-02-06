package model

type Book struct {
	BookId string `json:"id" db:"book_id"`
	Title  string `json:"title" db:"title"`
	Author string `json:"author" db:"author"`
}

type User struct {
	ID           int64  `json:"ID"`
	FirstName    string `json:"first_name"`
	LastName     string `json:"last_name"`
	Password     string `json:"password"`
	Email        string `json:"email"`
	PasswordHash string `json:"password_hash"`
}

type LoginInfo struct {
	Credential string `json:"credential"`
}
