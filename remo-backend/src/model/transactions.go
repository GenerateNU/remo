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

func GetBooksFromDB(pool *sql.DB, book_id string) (Book, error) {
	book := Book{
		BookId: book_id,
	}

	var bid int
	err := pool.QueryRow(fmt.Sprintf("SELECT id, title, author FROM books WHERE id= '%s';", book_id)).Scan(&bid, &book.Title, &book.Author)

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

	var bid int
	err := pool.QueryRow(fmt.Sprintf("SELECT * FROM user where email = '%s';", user_email)).Scan(&bid, &user.ID)

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
