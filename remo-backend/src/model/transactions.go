package model

import (
	"database/sql"
	"fmt"
	middleware "remo/backend/src/middleware"
	"strconv"
	"strings"
)

func WriteBooksToDb(pool *sql.DB, book Book) error {
	var new_id int
	id, e := pool.Exec("SELECT COUNT(id) FROM books;")
	if e != nil {
		panic(e)
	}
	if result, ok := id.(sql.Result); ok {
		count64, e2 := result.RowsAffected()
		if e2 != nil {
			panic(e2)
		}
		new_id = int(count64) + 1
	}

	_, err := pool.Exec(fmt.Sprintf("INSERT INTO books (id, title, author, isbn_13, isbn_10) VALUES ('%s', '%s', '%s', '%s', '%s');", strconv.Itoa(new_id), book.Title, book.Author, book.ISBN_13, book.ISBN_10))

	return err
}

func GetBooksFromDB(pool *sql.DB, isbn_13 string) (Book, error) {
	book := Book{
		ISBN_13: isbn_13,
	}

	err := pool.QueryRow(fmt.Sprintf("SELECT id, title, author, isbn_10, sub_title, pub_date, num_pages, synopsis FROM books WHERE isbn_13= '%s';", isbn_13)).Scan(&book.BookId, &book.Title, &book.Author, &book.ISBN_10, &book.Subtitle, &book.PublishDate, &book.PageCount, &book.Synopsis)

	if err != nil {
		return Book{}, nil
	}

	return book, nil
}

func InsertUser(pool *sql.DB, usr User) error {
	_, err := pool.Exec(fmt.Sprintf("INSERT INTO logins (id, first, last, email) VALUES ('%s','%s','%s', '%s');", strconv.Itoa(usr.ID), usr.FirstName, usr.LastName, usr.Email))

	return err
}

func GetUserByEmail(pool *sql.DB, user_email string) (User, error) {
	user := User{
		Email: user_email,
	}

	err := pool.QueryRow(fmt.Sprintf("SELECT id, first, last FROM logins where email = '%s';", user_email)).Scan(&user.ID, &user.FirstName, &user.LastName)

	if err != nil {
		return User{}, nil
	}

	return user, nil
}

func GetUserByID(pool *sql.DB, user_ID string) (User, error) {
	id, _ := strconv.Atoi(user_ID)
	user := User{
		ID: id,
	}

	err := pool.QueryRow(fmt.Sprintf("SELECT first, last, email FROM logins where ID = '%s';", user_ID)).Scan(&user.FirstName, &user.LastName, &user.Email)

	if err != nil {
		return User{}, nil
	}

	return user, nil
}

func (user *User) Validate() {
	user.Email = strings.TrimSpace(user.Email)
	if user.Email == "" {
		panic(middleware.NewBadRequestError("invalid email address"))
	}
}
