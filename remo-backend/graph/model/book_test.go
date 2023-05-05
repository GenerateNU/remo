package model

import (
	"testing"
	"time"
)

type reassignFieldTest struct {
	input, target, expected *string
}

var mtStringVal = ""
var mtStringPtr = &mtStringVal
var testStringVal = "test"
var testStringPtr = &testStringVal
var existStringVal = "existing"
var existStringPtr = &existStringVal

var reassignFieldTests = []reassignFieldTest{
	{mtStringPtr, nil, mtStringPtr},
	{testStringPtr, nil, testStringPtr},
	{testStringPtr, existStringPtr, testStringPtr},
	{mtStringPtr, existStringPtr, mtStringPtr},
	{testStringPtr, mtStringPtr, testStringPtr},
	{testStringPtr, testStringPtr, testStringPtr},
	{nil, nil, nil},
}

func TestReassignFieldString(t *testing.T) {
	for _, test := range reassignFieldTests {
		ReassignFieldString(test.input, test.target)
		if output := test.input; output != test.expected {
			t.Errorf("Output %q not equal to expected %q", *output, *test.expected)
		}
	}
}

type updateBookTest struct {
	input  *BookInput
	target *Book
}

var one = 1
var intPtr = &one
var jrr = "jrr"
var authPtr = &jrr
var now = time.Now()
var nowPtr = &now

var updateBookTests = []updateBookTest{
	{&BookInput{ID: "1", DefaultUserID: "1", StoryID: mtStringPtr, NumPages: intPtr, Author: authPtr, DateUpdated: nowPtr},
		&Book{ID: "1", Default_user_id: "1", Story_id: "1", Num_pages: 1}},
}

func TestUpdateBook(t *testing.T) {
	for _, test := range updateBookTests {
		test.target.UpdateBook(*test.input)
		if test.target.ID != test.input.ID {
			t.Errorf("Books IDs not equal")
		}
		if output := test.target.Default_user_id; output != test.input.DefaultUserID {
			t.Errorf("Output %q not equal to expected %q", output, test.input.DefaultUserID)
		}
		if output := test.target.Story_id; output != *test.input.StoryID {
			t.Errorf("Output %q not equal to expected %q", output, *test.input.StoryID)
		}
		if output := test.target.Num_pages; output != *test.input.NumPages {
			t.Errorf("Output %q not equal to expected %q", output, *test.input.NumPages)
		}
		if output := test.target.Author; output != *test.input.Author {
			t.Errorf("Output %q not equal to expected %q", output, *test.input.Author)
		}
		if output := test.target.Date_updated; output != *test.input.DateUpdated {
			t.Errorf("Output %q not equal to expected %q", output, *test.input.DateUpdated)
		}
	}
}
