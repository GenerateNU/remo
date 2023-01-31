package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.24

import (
	"context"
	"fmt"
	"remo/backend/graph/model"
)

// Title is the resolver for the title field.
func (r *bookResolver) Title(ctx context.Context, obj *model.Book) (string, error) {
	panic(fmt.Errorf("not implemented: Title - title"))
}

// Author is the resolver for the author field.
func (r *bookResolver) Author(ctx context.Context, obj *model.Book) (string, error) {
	panic(fmt.Errorf("not implemented: Author - author"))
}

// User is the resolver for the user field.
func (r *bookResolver) User(ctx context.Context, obj *model.Book) (*model.User, error) {
	panic(fmt.Errorf("not implemented: User - user"))
}

// CreateBook is the resolver for the createBook field.
func (r *mutationResolver) CreateBook(ctx context.Context, input model.NewBook) (*model.Book, error) {
	book := &model.Book{
		ID:    input.ID,
		Title: input.Title,
	}
	r.books = append(r.books, book)
	return book, nil
	//panic(fmt.Errorf("not implemented: CreateBook - createBook"))
}

// CreateTeacher is the resolver for the createTeacher field.
func (r *mutationResolver) CreateTeacher(ctx context.Context, input model.NewTeacher) (*model.Teacher, error) {
	panic(fmt.Errorf("not implemented: CreateTeacher - createTeacher"))
}

// Books is the resolver for the books field.
func (r *queryResolver) Books(ctx context.Context) ([]*model.Book, error) {
	return r.books, nil
	//panic(fmt.Errorf("not implemented: Books - books"))
}

// Teachers is the resolver for the teachers field.
func (r *queryResolver) Teachers(ctx context.Context) ([]*model.Teacher, error) {
	panic(fmt.Errorf("not implemented: Teachers - teachers"))
}

// ID is the resolver for the id field.
func (r *teacherResolver) ID(ctx context.Context, obj *model.Teacher) (string, error) {
	panic(fmt.Errorf("not implemented: ID - id"))
}

// Book returns BookResolver implementation.
func (r *Resolver) Book() BookResolver { return &bookResolver{r} }

// Mutation returns MutationResolver implementation.
func (r *Resolver) Mutation() MutationResolver { return &mutationResolver{r} }

// Query returns QueryResolver implementation.
func (r *Resolver) Query() QueryResolver { return &queryResolver{r} }

// Teacher returns TeacherResolver implementation.
func (r *Resolver) Teacher() TeacherResolver { return &teacherResolver{r} }

type bookResolver struct{ *Resolver }
type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
type teacherResolver struct{ *Resolver }
