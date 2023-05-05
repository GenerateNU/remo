package graph

//go:generate go run github.com/99designs/gqlgen generate
import (
	"remo/backend/graph/model"
)

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct {
	//Books map[string]*model.Book
	Books    []*model.Book
	teachers []*model.Teacher
	users    []*model.User
	//users map[string]*model.User
}
