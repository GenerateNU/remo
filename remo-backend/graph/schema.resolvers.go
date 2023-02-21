package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.24

import (
	"context"
	"errors"
	"fmt"
	"remo/backend/graph/model"
)

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
func (r *mutationResolver) CreateBook(ctx context.Context, input model.BookInput) (*model.Book, error) {
	// worse array implementation

	//for _, book := range r.Books {
	//	if book.ID == input.ID {
	//		return nil, errors.New("Requested Book ID already exists in database. Maybe try update book mutation.")
	//	}
	//}
	//newBook := &model.Book{
	//	ID:              input.ID,
	//	Default_user_id: input.DefaultUserID,
	//}
	//newBook.UpdateBook(input)
	//r.Books = append(r.Books, newBook)
	//return newBook, nil

	db, err := DbInitConnection()

	if err != nil {
		panic(err)
	} else {
		fmt.Println("Successful Connection to DB !")
	}

	var book model.Book
	book.ID = input.ID
	book.Default_user_id = *&input.DefaultUserID

	_, err = db.Exec(`INSERT INTO books (id, default_user_id, password, created_at, updated_at, is_deleted) VALUES (?, ?)`,
		book.ID, book.Default_user_id)
	if err != nil {
		panic(err)
	} else {
		fmt.Println("Insert User is successed !")
	}

	defer db.Close()
	return &book, nil

	// //BETTER BUT NOT WORKING IMPLEMENTATION
	// book := &model.Book{
	// 	ID:              input.ID,
	// 	Default_user_id: input.DefaultUserID,
	// }

	// n := len(r.Books)
	// if n == 0 {
	// 	r.Books = make(map[string]*model.Book)
	// }

	// if _, ok := r.Books[input.ID]; !ok {
	// 	r.Books[input.ID] = book
	// 	r.Books[input.ID].UpdateBook(input)
	// 	return r.Books[input.ID], nil
	// }
	// return nil, errors.New("Requested Book ID already exists in database. Maybe try update book mutation.")
}

// UpdateBook is the resolver for the updateBook field.
func (r *mutationResolver) UpdateBook(ctx context.Context, input model.BookInput) (*model.Book, error) {
	if _, ok := r.Books[input.ID]; ok {
		r.Books[input.ID].UpdateBook(input)
		return r.Books[input.ID], nil
	}
	return nil, errors.New("Requested book to update was not find. Try create new book mutation")
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

// GetBookByID is the resolver for the getBookByID field.
func (r *queryResolver) GetBookByID(ctx context.Context, id string) (*model.Book, error) {
	if _, ok := r.Books[id]; ok {
		return r.Books[id], nil
	}
	return nil, errors.New("Requested book was not find. Try create new book mutation")
}

// Teachers is the resolver for the teachers field.
func (r *queryResolver) Teachers(ctx context.Context) ([]*model.Teacher, error) {
	panic(fmt.Errorf("not implemented: Teachers - teachers"))
}

// GetUserByID is the resolver for the getUserByID field.
func (r *queryResolver) GetUserByID(ctx context.Context, id string) (*model.User, error) {
	//for _, user := range r.users {
	//	if id == user.ID {
	//		return user, nil
	//	}
	//}
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

// QtyLabel is the resolver for the qty_label field.
func (r *userBookResolver) QtyLabel(ctx context.Context, obj *model.UserBook) (*int, error) {
	panic(fmt.Errorf("not implemented: QtyLabel - qty_label"))
}

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

// UserBook returns UserBookResolver implementation.
func (r *Resolver) UserBook() UserBookResolver { return &userBookResolver{r} }

type classroomResolver struct{ *Resolver }
type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
type readingRateResultResolver struct{ *Resolver }
type studentResolver struct{ *Resolver }
type teacherResolver struct{ *Resolver }
type userBookResolver struct{ *Resolver }
