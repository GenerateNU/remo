package model

import (
	"database/sql"
	"fmt"
	utils "remo/backend/src/utils"
	"strings"
)

func WriteBooksToDb(pool *sql.DB, book Book) error {
	_, err := pool.Exec(fmt.Sprintf("INSERT INTO books (book_id, title, author) VALUES ('%s','%s','%s');", book.BookId, book.Title, book.Author))

	return err
}

func GetBooksFromDB(pool *sql.DB, isbn_13 string) (Book, error) {
	book := Book{
		ISBN_13: isbn_13,
	}

	err := pool.QueryRow(fmt.Sprintf("SELECT title, author FROM books WHERE isbn_13= '%s';", isbn_13)).Scan(&book.Title, &book.Author)

	if err != nil {
		panic(err)
	}

	return book, nil
}

func InsertUser(pool *sql.DB, usr User) error {

	_, err := pool.Exec(fmt.Sprintf("INSERT INTO users (ID, first_name, last_name, email) VALUES ('%s','%s','%s', '%s');", usr.ID, usr.FirstName, usr.LastName, usr.Email))

	return err
}

func GetUserByEmail(pool *sql.DB, user_email string) (User, error) {
	user := User{
		Email: user_email,
	}

	err := pool.QueryRow(fmt.Sprintf("SELECT id, first, last FROM logins where email = '%s';", user_email)).Scan(&user.ID, &user.FirstName, &user.LastName)

	if err != nil {
		panic(err)
	}

	return user, nil
}

func GetUserByID(pool *sql.DB, user_ID string) (User, error) {
	user := User{
		Email: user_ID,
	}

	var bid int
	err := pool.QueryRow(fmt.Sprintf("SELECT * FROM user where ID = '%s';", user_ID)).Scan(&bid, &user.Email)

	if err != nil {
		panic(err)
	}

	return user, nil
}

func (user *User) Validate() *utils.RestErr {
	user.FirstName = strings.TrimSpace(user.FirstName)
	user.LastName = strings.TrimSpace(user.LastName)
	user.Email = strings.TrimSpace(user.Email)
	if user.Email == "" {
		return utils.NewBadRequestError("invalid email address")
	}

	user.Password = strings.TrimSpace(user.Password)
	if user.Password == "" {
		return utils.NewBadRequestError("invalid password")
	}
	return nil
}
