package graph

//go:generate go run github.com/99designs/gqlgen generate
import (
	"remo/backend/graph/model"
	"time"
)

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct {
	Books map[string]*model.Book
	//Books    []*model.Book
	teachers []*model.Teacher
	users    []*model.User
	/**
	SHOULD ABSOLUTELY CHANGE BOOKS AND USERS TO A MAP
	*/
	//users map[string]*model.User
}

// / ReassignFieldString
// Helper function to update the value of the target string if the input string is not null.
func ReassignFieldString(input *string, target *string) {
	if input != nil {
		// case where there is no entry in this field yet
		if target == nil {
			target = input
			// case where there is already an entry in this field
		} else {
			*target = *input
		}
	}
}

// ReassignFieldInt
// Helper function to update the value of the target Int if the input Int is not null.
func ReassignFieldInt(input *int, target *int) {
	if input != nil {
		// case where there is no entry in this field yet
		if target == nil {
			target = input
			// case where there is already an entry in this field
		} else {
			*target = *input
		}
	}
}

// ReassignFieldTime
// Helper function to update the value of the target Time if the input Time is not null.
func ReassignFieldTime(input *time.Time, target *time.Time) {
	if input != nil {
		// case where there is no entry in this field yet
		if target == nil {
			target = input
			// case where there is already an entry in this field
		} else {
			*target = *input
		}
	}
}
