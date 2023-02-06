package model

import (
	"fmt"
	utils "remo/backend/src/utils"
	"strings"

	"github.com/jackc/pgx"
)

func WriteBooksToDb(pool *pgx.Conn, book Book) error {
	_, err := pool.Exec(fmt.Sprintf("INSERT INTO books (book_id, title, author) VALUES ('%s','%s','%s');", book.BookId, book.Title, book.Author))

	return err
}

func GetBooksFromDB(pool *pgx.Conn, book_id string) (Book, error) {
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

func InsertUser(pool *pgx.Conn, usr User) error {

	_, err := pool.Exec(fmt.Sprintf("INSERT INTO users (ID, first_name, last_name, email) VALUES ('%s','%s','%s', '%s');", usr.ID, usr.FirstName, usr.LastName, usr.Email))

	return err
}

func GetUserByEmail(pool *pgx.Conn, user_email string) (User, error) {
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

func GetUserByID(pool *pgx.Conn, user_ID string) (User, error) {
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
