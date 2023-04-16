package model

import (
	"database/sql"

	_ "github.com/go-sql-driver/mysql"
)

type MsModel struct {
	Conn *sql.DB
}

type Model interface {
	Book(string) Book
	AllBooks() []Book
	UserBooks(string) []Book
	CheckoutBook(string, string) error
	ReturnBookByID(string, string) error
	UserByEmail(string) (User, error)
	UserByID(string) User
	AddBooks(Book) (Book, error)
	AddUser(User) (User, error)
	AddOnboardingQuestions(string, OnboardingQuestions) error
	CheckOnboarded(string) (string, error)
	MakeLibrary(User) error
}

func (m *MsModel) Book(id string) Book {
	book, err := GetBooksFromDB(m.Conn, id)

	if err != nil {
		panic(err)
	}

	return book
}
func (m *MsModel) UserBooks(id string) []Book {
	books, err := GetUserBooksFromDB(m.Conn, id)

	if err != nil {
		panic(err)
	}

	return books
}

func (m *MsModel) AllBooks() []Book {
	books, err := GetAllBooksFromDB(m.Conn)

	if err != nil {
		panic(err)
	}

	return books
}

func (m *MsModel) UserByEmail(email string) (User, error) {
	user, err := GetUserByEmail(m.Conn, email)

	if err != nil {
		return User{}, err
	}

	return user, err
}

func (m *MsModel) UserByID(id string) User {
	user, err := GetUserByID(m.Conn, id)

	if err != nil {
		panic(err)
	}

	return user
}

func (m *MsModel) AddBooks(book Book) (Book, error) {
	err := WriteBooksToDb(m.Conn, book)

	if err != nil {
		return Book{}, err
	}

	return book, nil
}

func (m *MsModel) AddUser(usr User) (User, error) {
	err := InsertUser(m.Conn, usr)

	if err != nil {
		return User{}, err
	}

	return usr, nil
}

func (m *MsModel) CheckoutBook(usr string, isbn_13 string) error {
	err := CheckoutBook(m.Conn, usr, isbn_13)

	if err != nil {
		return err
	}
	return nil
}

func (m *MsModel) ReturnBookByID(user_id string, isbn_13 string) error {
	err := ReturnBook(m.Conn, user_id, isbn_13)

	if err != nil {
		return err
	}
	return nil
}

func (m *MsModel) AddOnboardingQuestions(user_id string, questions OnboardingQuestions) error {
	err := InsertOnboardingQuestions(m.Conn, user_id, questions)

	if err != nil {
		return err
	}

	return nil
}

func (m *MsModel) CheckOnboarded(id string) (string, error) {
	check, err := GetOnboarded(m.Conn, id)
	if err != nil {
		return check, err
	}

	return check, err
}

func (m *MsModel) MakeLibrary(usr User) error {
	err := CreateLibrary(m.Conn, usr)

	if err != nil {
		return err
	}

	return nil
}
