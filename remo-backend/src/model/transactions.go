package model

import (
	"database/sql"
	"fmt"
	"strconv"
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

	err := pool.QueryRow(fmt.Sprintf("SELECT id, title, author, isbn_10, pub_date, num_pages, synopsis FROM books WHERE isbn_13= '%s';", isbn_13)).Scan(&book.BookId, &book.Title, &book.Author, &book.ISBN_10, &book.PublishDate, &book.PageCount, &book.Synopsis)

	if err != nil {
		return Book{}, nil
		// panic(err)
	}

	return book, nil
}

func GetUserBooksFromDB(pool *sql.DB, user_id string) ([]Book, error) {
	var user_lib string
	err := pool.QueryRow(fmt.Sprintf("SELECT id FROM libraries where user_id='" + user_id + "' LIMIT 1;")).Scan(&user_lib)

	if err != nil {
		return nil, err
	}
	rows, e := pool.Query("SELECT b.id, b.title, b.author, b.isbn_10, b.isbn_13, b.num_pages, b.synopsis FROM libraries2books ul JOIN books b ON b.id = ul.book_id where library_id='" + user_lib + "' LIMIT 20;")

	if e != nil {
		return nil, e
	}
	defer rows.Close()

	var books []Book

	for rows.Next() {
		book := Book{}
		err := rows.Scan(&book.BookId, &book.Title, &book.Author, &book.ISBN_10, &book.ISBN_13, &book.PageCount, &book.Synopsis)
		if err != nil {
			return nil, err
		}
		books = append(books, book)
	}

	if err = rows.Err(); err != nil {
		return []Book{}, nil
	}

	return books, nil
}

func GetAllBooksFromDB(pool *sql.DB) ([]Book, error) {
	rows, err := pool.Query("SELECT id, title, author, isbn_10, isbn_13, num_pages, synopsis FROM books;")

	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var books []Book

	for rows.Next() {
		book := Book{}
		err := rows.Scan(&book.BookId, &book.Title, &book.Author, &book.ISBN_10, &book.ISBN_13, &book.PageCount, &book.Synopsis)
		if err != nil {
			return nil, err
		}
		books = append(books, book)
	}

	if err = rows.Err(); err != nil {
		return []Book{}, nil
	}

	return books, nil
}
func InsertUser(pool *sql.DB, usr User) error {
	_, err := pool.Exec(fmt.Sprintf("INSERT INTO logins (id, first, last, email) VALUES ('%s','%s','%s', '%s');", strconv.Itoa(usr.ID), usr.FirstName, usr.LastName, usr.Email))
	return err
}

func CreateLibrary(pool *sql.DB, usr User) error {
	_, err := pool.Exec(fmt.Sprintf("INSERT INTO libraries (name, user_id) VALUES ('%s','%s');", usr.LastName, strconv.Itoa(usr.ID)))
	return err
}

func GetUserByEmail(pool *sql.DB, user_email string) (User, error) {
	user := User{
		Email: user_email,
	}

	err := pool.QueryRow(fmt.Sprintf("SELECT id, first, last FROM logins where email = '%s';", user_email)).Scan(&user.ID, &user.FirstName, &user.LastName)

	if err != nil {
		return User{FirstName: "Invalid"}, nil
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

func CheckoutBook(pool *sql.DB, user_ID string, isbn_13 string) error {
	var user_lib string
	err := pool.QueryRow(fmt.Sprintf("SELECT id FROM libraries where user_id='" + user_ID + "' LIMIT 1;")).Scan(&user_lib)

	if err != nil {
		return err
	}

	var book_id string
	e2 := pool.QueryRow(fmt.Sprintf("SELECT id FROM books where isbn_13='" + isbn_13 + "' LIMIT 1;")).Scan(&book_id)
	if e2 != nil {
		e3 := pool.QueryRow(fmt.Sprintf("SELECT id FROM books where isbn_10='" + isbn_13 + "' LIMIT 1;")).Scan(&book_id)
		if e3 != nil {
			return e3
		}
	}
	_, e4 := pool.Exec(fmt.Sprintf("INSERT INTO libraries2books (library_id, book_id, user_id) VALUES ('%s','%s','%s');", user_lib, book_id, user_ID))

	if e4 != nil {
		return e4
	}
	return nil
}

func ReturnBook(pool *sql.DB, user_ID string, isbn_13 string) error {
	var user_lib string
	err := pool.QueryRow(fmt.Sprintf("SELECT id FROM libraries where user_id='" + user_ID + "' LIMIT 1;")).Scan(&user_lib)
	if err != nil {
		return err
	}

	var book_id string
	e2 := pool.QueryRow(fmt.Sprintf("SELECT id FROM books where isbn_13='" + isbn_13 + "' LIMIT 1;")).Scan(&book_id)
	if e2 != nil {
		e3 := pool.QueryRow(fmt.Sprintf("SELECT id FROM books where isbn_10='" + isbn_13 + "' LIMIT 1;")).Scan(&book_id)
		if e3 != nil {
			return e3
		}
	}
	_, e4 := pool.Exec(fmt.Sprintf("DELETE FROM  libraries2books WHERE library_id='" + user_lib + "' AND book_id='" + book_id + "';"))

	if e4 != nil {
		return e4
	}
	return nil
}

func InsertOnboardingQuestions(pool *sql.DB, user_id string, questions OnboardingQuestions) error {
	_, err := pool.Exec(fmt.Sprintf("INSERT INTO onboarding_questions (user_id, q1, q2, q3, q4, q5, q6, q7, q8, submitted) VALUES ('%s','%s','%s', '%s', '%s','%s','%s', '%s', '%s', '1');", user_id, questions.Q1, questions.Q2, questions.Q3, questions.Q4, questions.Q5, questions.Q6, questions.Q7, questions.Q8))
	return err
}

func GetOnboarded(pool *sql.DB, user_id string) (string, error) {
	var onboarded string

	err := pool.QueryRow(fmt.Sprintf("SELECT onboarded FROM logins where id = '%s';", user_id)).Scan(&onboarded)
	fmt.Println(onboarded)
	if err != nil {
		return "not onboarded", err
	}

	return onboarded, nil
}

func OnboardUser(pool *sql.DB, user_id string) error {

	_, err := pool.Exec(fmt.Sprintf("UPDATE logins SET onboarded='1' WHERE id = '%s' ;", user_id))

	if err != nil {
		return err
	}

	return nil
}

// func AddReadingLog(pool *sql.DB, isbn string, log ReadingLog) error {
// 	_, err := pool.Exec(fmt.Sprintf("INSERT INTO reading_rate_results (user_id, book_id, last, email) VALUES ('%s','%s','%s', '%s');", strconv.Itoa(usr.ID), usr.FirstName, usr.LastName, usr.Email))
// 	return err
// }
