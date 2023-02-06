package model

import (
	"github.com/jackc/pgx"
)

type PgModel struct {
	Conn *pgx.Conn
}

type Model interface {
	Book(string) Book
	UserByEmail(string) User
	UserByID(string) User
	AddBooks(Book) (Book, error)
	AddUser(User) (User, error)
}

func (m *PgModel) Book(id string) Book {
	book, err := GetBooksFromDB(m.Conn, id)

	if err != nil {
		panic(err)
	}

	return book
}

func (m *PgModel) UserByEmail(email string) User {
	user, err := GetUserByEmail(m.Conn, email)

	if err != nil {
		panic(err)
	}

	return user
}

func (m *PgModel) UserByID(id string) User {
	user, err := GetUserByID(m.Conn, id)

	if err != nil {
		panic(err)
	}

	return user
}

func (m *PgModel) AddBooks(book Book) (Book, error) {
	err := WriteBooksToDb(m.Conn, book)

	if err != nil {
		return Book{}, err
	}

	return book, nil
}

func (m *PgModel) AddUser(usr User) (User, error) {
	err := InsertUser(m.Conn, usr)

	if err != nil {
		return User{}, err
	}

	return usr, nil
}
