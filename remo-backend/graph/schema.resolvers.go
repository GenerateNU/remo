package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.24

import (
	"context"
	"fmt"
	"remo/backend/graph/model"
)

// DefaultUserID is the resolver for the default_user_id field.
func (r *bookResolver) DefaultUserID(ctx context.Context, obj *model.Book) (*string, error) {
	panic(fmt.Errorf("not implemented: DefaultUserID - default_user_id"))
}

// QtyLabel is the resolver for the qty_label field.
func (r *bookResolver) QtyLabel(ctx context.Context, obj *model.Book) (*int, error) {
	panic(fmt.Errorf("not implemented: QtyLabel - qty_label"))
}

// UserID is the resolver for the user_id field.
func (r *bookResolver) UserID(ctx context.Context, obj *model.Book) (*int, error) {
	panic(fmt.Errorf("not implemented: UserID - user_id"))
}

// ClassroomSchoolYear is the resolver for the classroom_school_year field.
func (r *classroomResolver) ClassroomSchoolYear(ctx context.Context, obj *model.Classroom) (*string, error) {
	panic(fmt.Errorf("not implemented: ClassroomSchoolYear - classroom_school_year"))
}

// ClassroomStartDate is the resolver for the classroom_start_date field.
func (r *classroomResolver) ClassroomStartDate(ctx context.Context, obj *model.Classroom) (*string, error) {
	panic(fmt.Errorf("not implemented: ClassroomStartDate - classroom_start_date"))
}

// ClassroomEndDate is the resolver for the classroom_end_date field.
func (r *classroomResolver) ClassroomEndDate(ctx context.Context, obj *model.Classroom) (*string, error) {
	panic(fmt.Errorf("not implemented: ClassroomEndDate - classroom_end_date"))
}

// ClassroomName is the resolver for the classroom_name field.
func (r *classroomResolver) ClassroomName(ctx context.Context, obj *model.Classroom) (*string, error) {
	panic(fmt.Errorf("not implemented: ClassroomName - classroom_name"))
}

// ClassroomSubject is the resolver for the classroom_subject field.
func (r *classroomResolver) ClassroomSubject(ctx context.Context, obj *model.Classroom) (*string, error) {
	panic(fmt.Errorf("not implemented: ClassroomSubject - classroom_subject"))
}

// ClassroomDisplayName is the resolver for the classroom_display_name field.
func (r *classroomResolver) ClassroomDisplayName(ctx context.Context, obj *model.Classroom) (*string, error) {
	panic(fmt.Errorf("not implemented: ClassroomDisplayName - classroom_display_name"))
}

// ClassroomAvgLength is the resolver for the classroom_avg_length field.
func (r *classroomResolver) ClassroomAvgLength(ctx context.Context, obj *model.Classroom) (*string, error) {
	panic(fmt.Errorf("not implemented: ClassroomAvgLength - classroom_avg_length"))
}

// CreateBook is the resolver for the createBook field.
func (r *mutationResolver) CreateBook(ctx context.Context, input *model.NewBook) (*model.Book, error) {
	//book := &model.Book{
	//	Id:      input.ID,
	//	Title:   input.Title,
	//	Author:  input.Author,
	//	User_id: input.UserID,
	//}
	//r.books[input.ID] = book
	//return book, nil
	panic(fmt.Errorf("not implemented: Teachers - teachers"))
}

// CreateTeacher is the resolver for the createTeacher field.
func (r *mutationResolver) CreateTeacher(ctx context.Context, input model.NewTeacher) (*model.Teacher, error) {
	panic(fmt.Errorf("not implemented: CreateTeacher - createTeacher"))
}

// CreateClassroom is the resolver for the createClassroom field.
func (r *mutationResolver) CreateClassroom(ctx context.Context, input model.NewClassroom) (*model.Classroom, error) {
	panic(fmt.Errorf("not implemented: CreateClassroom - createClassroom"))
}

// CreateStudent is the resolver for the createStudent field.
func (r *mutationResolver) CreateStudent(ctx context.Context, input model.NewStudent) (*model.Student, error) {
	panic(fmt.Errorf("not implemented: CreateStudent - createStudent"))
}

// CreateNewReadingRateResults is the resolver for the createNewReadingRateResults field.
func (r *mutationResolver) CreateNewReadingRateResults(ctx context.Context, input model.NewReadingRateResults) (*model.ReadingRateResult, error) {
	panic(fmt.Errorf("not implemented: CreateNewReadingRateResults - createNewReadingRateResults"))
}

// CreateNewUser is the resolver for the createNewUser field.
func (r *mutationResolver) CreateNewUser(ctx context.Context, input *model.NewUser) (*model.User, error) {
	user := &model.User{
		ID:        input.ID,
		FirstName: input.FirstName,
		LastName:  input.LastName,
		Email:     input.Email,
	}
	//r.users[input.ID] = user
	r.users = append(r.users, user)
	return user, nil
}

// GetBookByID is the resolver for the getBookByID field.
func (r *queryResolver) GetBookByID(ctx context.Context, id string) (*model.Book, error) {
	for _, book := range r.books {
		if id == book.Id {
			return book, nil
		}
	}
	//return r.books[id], nil
	panic(fmt.Errorf("not implemented: Teachers - teachers"))
}

// Teachers is the resolver for the teachers field.
func (r *queryResolver) Teachers(ctx context.Context) ([]*model.Teacher, error) {
	panic(fmt.Errorf("not implemented: Teachers - teachers"))
}

// GetUserByID is the resolver for the getUserByID field.
func (r *queryResolver) GetUserByID(ctx context.Context, id string) (*model.User, error) {
	for _, user := range r.users {
		if id == user.ID {
			return user, nil
		}
	}
	//return r.users[id], nil
	panic(fmt.Errorf("not implemented: GetUserByID - getUserByID"))
}

// Date is the resolver for the date field.
func (r *readingRateResultResolver) Date(ctx context.Context, obj *model.ReadingRateResult) (*string, error) {
	panic(fmt.Errorf("not implemented: Date - date"))
}

// StartTime is the resolver for the start_time field.
func (r *readingRateResultResolver) StartTime(ctx context.Context, obj *model.ReadingRateResult) (*string, error) {
	panic(fmt.Errorf("not implemented: StartTime - start_time"))
}

// EndTime is the resolver for the end_time field.
func (r *readingRateResultResolver) EndTime(ctx context.Context, obj *model.ReadingRateResult) (*string, error) {
	panic(fmt.Errorf("not implemented: EndTime - end_time"))
}

// DateCreated is the resolver for the dateCreated field.
func (r *studentResolver) DateCreated(ctx context.Context, obj *model.Student) (*string, error) {
	panic(fmt.Errorf("not implemented: DateCreated - dateCreated"))
}

// DateUpdated is the resolver for the dateUpdated field.
func (r *studentResolver) DateUpdated(ctx context.Context, obj *model.Student) (*string, error) {
	panic(fmt.Errorf("not implemented: DateUpdated - dateUpdated"))
}

// RtiSrvType is the resolver for the rtiSrvType field.
func (r *studentResolver) RtiSrvType(ctx context.Context, obj *model.Student) (*int, error) {
	panic(fmt.Errorf("not implemented: RtiSrvType - rtiSrvType"))
}

// TestField is the resolver for the test_field field.
func (r *teacherResolver) TestField(ctx context.Context, obj *model.Teacher) (string, error) {
	panic(fmt.Errorf("not implemented: TestField - test_field"))
}

// Book returns BookResolver implementation.
func (r *Resolver) Book() BookResolver { return &bookResolver{r} }

// Classroom returns ClassroomResolver implementation.
func (r *Resolver) Classroom() ClassroomResolver { return &classroomResolver{r} }

// Mutation returns MutationResolver implementation.
func (r *Resolver) Mutation() MutationResolver { return &mutationResolver{r} }

// Query returns QueryResolver implementation.
func (r *Resolver) Query() QueryResolver { return &queryResolver{r} }

// ReadingRateResult returns ReadingRateResultResolver implementation.
func (r *Resolver) ReadingRateResult() ReadingRateResultResolver {
	return &readingRateResultResolver{r}
}

// Student returns StudentResolver implementation.
func (r *Resolver) Student() StudentResolver { return &studentResolver{r} }

// Teacher returns TeacherResolver implementation.
func (r *Resolver) Teacher() TeacherResolver { return &teacherResolver{r} }

type bookResolver struct{ *Resolver }
type classroomResolver struct{ *Resolver }
type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
type readingRateResultResolver struct{ *Resolver }
type studentResolver struct{ *Resolver }
type teacherResolver struct{ *Resolver }

// !!! WARNING !!!
// The code below was going to be deleted when updating resolvers. It has been copied here so you have
// one last chance to move it out of harms way if you want. There are two reasons this happens:
//   - When renaming or deleting a resolver the old code will be put in here. You can safely delete
//     it when you're done.
//   - You have helper methods in this file. Move them out to keep these resolver files clean.
func (r *queryResolver) Books(ctx context.Context) ([]*model.Book, error) {
	panic(fmt.Errorf("not implemented: Books - books"))
}
func (r *queryResolver) Users(ctx context.Context) ([]*model.User, error) {
	panic(fmt.Errorf("not implemented: Users - users"))
}
func (r *queryResolver) GetUserByLastName(ctx context.Context, lastName string) (*model.User, error) {
	panic(fmt.Errorf("not implemented: GetUserByLastName - getUserByLastName"))
}
func (r *queryResolver) GetUserByEmail(ctx context.Context, email string) (*model.User, error) {
	panic(fmt.Errorf("not implemented: GetUserByEmail - getUserByEmail"))
}
func (r *queryResolver) GetBookByTitle(ctx context.Context, title string) (*model.Book, error) {
	panic(fmt.Errorf("not implemented: GetBookByTitle - getBookByTitle"))
}
func (r *queryResolver) GetUser(ctx context.Context, id string) (*model.User, error) {
	for _, user := range r.users {
		if user.ID == id {
			return user, nil
		}
	}
	panic(fmt.Errorf("User with given ID not found in the database"))
}
func (r *bookResolver) User(ctx context.Context, obj *model.Book) (*model.User, error) {
	panic(fmt.Errorf("not implemented: User - user"))
}
func (r *bookResolver) Author(ctx context.Context, obj *model.Book) (string, error) {
	panic(fmt.Errorf("not implemented: Author - author"))
}
func (r *queryResolver) Test(ctx context.Context) ([]*model.Student, error) {
	panic(fmt.Errorf("not implemented: Test - test"))
}
func (r *classroomResolver) ClassroomID(ctx context.Context, obj *model.Classroom) (int, error) {
	panic(fmt.Errorf("not implemented: ClassroomID - classroomId"))
}
func (r *classroomResolver) ClassroomSchoolID(ctx context.Context, obj *model.Classroom) (int, error) {
	panic(fmt.Errorf("not implemented: ClassroomSchoolID - classroom_school_id"))
}
func (r *classroomResolver) ClassroomAvgDays(ctx context.Context, obj *model.Classroom) (int, error) {
	panic(fmt.Errorf("not implemented: ClassroomAvgDays - classroom_avg_days"))
}
func (r *classroomResolver) ClassroomGradeLevelType(ctx context.Context, obj *model.Classroom) (int, error) {
	panic(fmt.Errorf("not implemented: ClassroomGradeLevelType - classroom_grade_level_type"))
}
func (r *classroomResolver) ClassroomGradeLevel(ctx context.Context, obj *model.Classroom) (string, error) {
	panic(fmt.Errorf("not implemented: ClassroomGradeLevel - classroom_grade_level"))
}
func (r *classroomResolver) ClassroomCoTeacherID(ctx context.Context, obj *model.Classroom) (int, error) {
	panic(fmt.Errorf("not implemented: ClassroomCoTeacherID - classroom_co_teacher_id"))
}
func (r *classroomResolver) ClassroomTeacherIDV1(ctx context.Context, obj *model.Classroom) (int, error) {
	panic(fmt.Errorf("not implemented: ClassroomTeacherIDV1 - classroom_teacher_idV1"))
}
func (r *classroomResolver) ClassroomNumStudents(ctx context.Context, obj *model.Classroom) (int, error) {
	panic(fmt.Errorf("not implemented: ClassroomNumStudents - classroom_num_students"))
}
func (r *classroomResolver) ClassroomNumSeats(ctx context.Context, obj *model.Classroom) (int, error) {
	panic(fmt.Errorf("not implemented: ClassroomNumSeats - classroom_num_seats"))
}
func (r *classroomResolver) ClassroomConfFrequencyAbove(ctx context.Context, obj *model.Classroom) (int, error) {
	panic(fmt.Errorf("not implemented: ClassroomConfFrequencyAbove - classroom_conf_frequency_above"))
}
func (r *classroomResolver) ClassroomConfFrequencyOn(ctx context.Context, obj *model.Classroom) (int, error) {
	panic(fmt.Errorf("not implemented: ClassroomConfFrequencyOn - classroom_conf_frequency_on"))
}
func (r *classroomResolver) ClassroomConfFrequencyBelow(ctx context.Context, obj *model.Classroom) (int, error) {
	panic(fmt.Errorf("not implemented: ClassroomConfFrequencyBelow - classroom_conf_frequency_below"))
}
func (r *classroomResolver) ClassroomConfFrequencyFarBelow(ctx context.Context, obj *model.Classroom) (int, error) {
	panic(fmt.Errorf("not implemented: ClassroomConfFrequencyFarBelow - classroom_conf_frequency_far_below"))
}
