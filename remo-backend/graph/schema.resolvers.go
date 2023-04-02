package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.24

import (
	"context"
	"crypto/rand"
	"database/sql"
	"encoding/hex"
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

// ClassroomStatusID is the resolver for the classroom_status_id field.
func (r *classroomResolver) ClassroomStatusID(ctx context.Context, obj *model.Classroom) (int, error) {
	panic(fmt.Errorf("not implemented: ClassroomStatusID - classroom_status_id"))
}

// CreateBook is the resolver for the createBook field.
func (r *mutationResolver) CreateBook(ctx context.Context, input model.BookInput) (*model.Book, error) {
	// Insert the new Book object into the database
	stmt, err := DB.Prepare("INSERT INTO books (story_id, author, cover_image, date_created, date_updated, default_user_id, foreword, editor, illustrator, isbn_10, isbn_13, num_pages, pub_date, copyright_date, edition, synopsis, title, word_count, sub_title, asin) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)")
	if err != nil {
		return nil, err
	}
	defer stmt.Close()

	// Execute the insert statement with the incremented ID
	_, err = stmt.Exec(input.StoryID, input.Author, input.CoverImage, input.DateCreated, input.DateUpdated, input.DefaultUserID,
		input.Foreword, input.Editor, input.Illustrator, input.Isbn10, input.Isbn13, input.NumPages, input.PubDate, input.CopyrightDate,
		input.Edition, input.Synopsis, input.Title, input.WordCount, input.SubTitle, input.Asin)

	if err != nil {
		return nil, err
	}

	return &model.Book{}, err
}

// UpdateBook is the resolver for the updateBook field.
func (r *mutationResolver) UpdateBook(ctx context.Context, input *model.BookInput) (*model.Book, error) {
	//NEED TO IMPLEMENT: GET BOOK FROM DATABASE
	//UPDATE QUERY
	panic(fmt.Errorf("not implemented: UpdateBook - updateBook"))
	//return nil, errors.New("Requested book to update was not find. Try create new book mutation")
}

// CreateTeacher is the resolver for the createTeacher field.
func (r *mutationResolver) CreateTeacher(ctx context.Context, input model.NewTeacher) (*model.Teacher, error) {
	// Insert the new Teacher object into the database
	stmt, err := DB.Prepare("INSERT INTO teacher (active, teacher_date_created, teacher_date_updated, teacher_first_name, teacher_last_name) values (?, ?, ?, ?, ?)")
	if err != nil {
		return nil, err
	}
	defer stmt.Close()

	// Execute the insert statement with the incremented ID
	_, err = stmt.Exec(input.Active, input.TeacherDateCreated, input.TeacherDateUpdated,
		input.TeacherFirstName, input.TeacherLastName)

	if err != nil {
		return nil, err
	}

	return &model.Teacher{}, err
}

// CreateClassroom is the resolver for the createClassroom field.
func (r *mutationResolver) CreateClassroom(ctx context.Context, input model.NewClassroom) (*model.Classroom, error) {
	stmt, err := DB.Prepare("INSERT INTO classroom (classroom_co_teacher_id, classroom_status_id) values (?, ?)")
	if err != nil {
		return nil, err
	}
	defer stmt.Close()

	// Execute the insert statement with the incremented ID
	_, err = stmt.Exec(input.ClassroomCoTeacherID, input.ClassroomStatusID)

	if err != nil {
		return nil, err
	}

	return &model.Classroom{}, err
}

// CreateStudent is the resolver for the createStudent field.
func (r *mutationResolver) CreateStudent(ctx context.Context, input model.NewStudent) (*model.Student, error) {
	stmt, err := DB.Prepare("INSERT INTO student_info (student_id, student_app_id, first_name, middle_name, last_name) values (?, ?, ?, ?, ?)")
	if err != nil {
		return nil, err
	}
	defer stmt.Close()

	// Execute the insert statement with the incremented ID
	_, err = stmt.Exec(input.StudentID, input.StudentAppID, input.FirstName, input.MiddleName, input.LastName)

	if err != nil {
		return nil, err
	}

	return &model.Student{}, err
}

// CreateNewReadingRateResults is the resolver for the createNewReadingRateResults field.
func (r *mutationResolver) CreateNewReadingRateResults(ctx context.Context, input model.NewReadingRateResults) (*model.ReadingRateResult, error) {
	stmt, err := DB.Prepare("INSERT INTO reading_rate_results (word_per_page) values (?)")
	if err != nil {
		return nil, err
	}
	defer stmt.Close()

	// Execute the insert statement with the incremented ID
	_, err = stmt.Exec(input.WordsPerPage)

	if err != nil {
		return nil, err
	}

	return &model.ReadingRateResult{}, err
}

// GetBookByIsbn is the resolver for the getBookByISBN field.
func (r *queryResolver) GetBookByIsbn(ctx context.Context, isbn int) (*model.Book, error) {
	panic(fmt.Errorf("not implemented: GetBookByIsbn - getBookByISBN"))
}

// Teachers is the resolver for the teachers field.
func (r *queryResolver) Teachers(ctx context.Context) ([]*model.Teacher, error) {
	var teachers []*model.Teacher

	// Assuming that you have a database connection named `db`
	rows, err := DB.Query("SELECT * FROM teacher")
	if err != nil {
		return nil, err
	}

	defer rows.Close()

	for rows.Next() {
		teacher := &model.Teacher{}
		// err := rows.Scan(&teacher.Teacher_date_of_birth, &teacher.Teacher_date_started_teaching, &teacher.Teacher_id, &teacher.Teacher_login_id, &teacher.Teacher_title,
		// 	&teacher.Teacher_first_name, &teacher.Teacher_middle_name, &teacher.Teacher_last_name, &teacher.Teacher_suffix,
		// 	&teacher.Degree_level_id, &teacher.Is_certified, &teacher.Certification_id, &teacher.Certification_start,
		// 	&teacher.Certification_end, &teacher.Teacher_avatar, &teacher.Teacher_backup_avater, &teacher.Teacher_subscription_type,
		// 	&teacher.Teacher_code_name, &teacher.Teacher_display_name, &teacher.Quarantined_books, &teacher.Teacher_backup_email,
		// 	&teacher.Teacher_gender, &teacher.Teacher_pronoun, &teacher.Teacher_position, &teacher.Teacher_grade_band,
		// 	&teacher.Teacher_subjects, &teacher.Teacher_provided_services, &teacher.Teacher_specialized_courses,
		// 	&teacher.Teacher_state_id, &teacher.Teacher_district, &teacher.Teacher_school, &teacher.Teacher_cell_phone,
		// 	&teacher.Teacher_texts_enabled, &teacher.Active, &teacher.Teacher_date_created, &teacher.Teacher_date_updated)

		if err != nil {
			return nil, err
		}
		teachers = append(teachers, teacher)
	}

	return teachers, nil
}

// GetUserByID is the resolver for the getUserByID field.
func (r *queryResolver) GetUserByID(ctx context.Context, id string) (*model.User, error) {
	var user model.User

	row := DB.QueryRow(`SELECT 
	COALESCE(id,'0'),
	COALESCE(student_id,'0'),
	COALESCE(student_app_id,'0'),
	COALESCE(student_calpads_ssid,'0'),
	COALESCE(student_login_id,'0'),
	COALESCE(first_name,''),
	COALESCE(middle_name,''),
	COALESCE(last_name,''),
	COALESCE(date_created,0),
	COALESCE(date_updated,0),
	COALESCE(preferred_name,''),
	COALESCE(gender,0),
	COALESCE(pronoun,0),
	COALESCE(birth_date,''),
	COALESCE(grade_level,0),
	COALESCE(grade_movement,0),
	COALESCE(guided_reading_level,'0'),
	COALESCE(rti_srv_type,0),
	COALESCE(student_services,''),
	COALESCE(rti_services,''),
	COALESCE(specialized_courses,''),
	COALESCE(grade_level_status,0),
	COALESCE(lexile_level_min,0),
	COALESCE(lexile_level_max,0),
	COALESCE(type,0),
	COALESCE(weakness,0),
	COALESCE(reader_type,0),
	COALESCE(reading_stage,0),
	COALESCE(ethnicity,0),
	COALESCE(avatar,''),
	COALESCE(backup_avatar,'')	FROM student_info WHERE id = ?`, id)

	//COALESCE(self_assessment,0), COALESCE(reader_non_reader,0), COALESCE(read_goal,0),
	// COALESCE(type_of_reading,0),	COALESCE(book_finish,0), COALESCE(read_speed,0)

	if err := row.Scan(&user.ID,
		&user.StudentID,
		&user.StudentAppID,
		&user.StudentCalpadsSsid,
		&user.StudentLoginID,
		&user.FirstName,
		&user.MiddleName,
		&user.LastName,
		&user.DateCreated,
		&user.DateUpdated,
		&user.PreferredName,
		&user.Gender,
		&user.Pronoun,
		&user.BirthDate,
		&user.GradeLevel,
		&user.GradeMovement,
		&user.GuidedReadingLevel,
		&user.RtiSrvType,
		&user.StudentServices,
		&user.RtiServices,
		&user.SpecializedCourses,
		&user.GradeLevelStatus,
		&user.LexileLevelMin,
		&user.LexileLevelMax,
		&user.Type,
		&user.Weakness,
		&user.ReaderType,
		&user.ReadingStage,
		&user.Ethnicity,
		&user.Avatar,
		&user.BackupAvatar); err != nil {
		if err == sql.ErrNoRows {
			var mtUser *model.User
			return mtUser, fmt.Errorf("GetUserByID %q: no such user", id)
		}

		return &user, fmt.Errorf("GetUserByID %q: %v", id, err)
	}
	return &user, nil
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

// Active is the resolver for the Active field.
func (r *teacherResolver) Active(ctx context.Context, obj *model.Teacher) (int, error) {
	panic(fmt.Errorf("not implemented: Active - Active"))
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

// !!! WARNING !!!
// The code below was going to be deleted when updating resolvers. It has been copied here so you have
// one last chance to move it out of harms way if you want. There are two reasons this happens:
//   - When renaming or deleting a resolver the old code will be put in here. You can safely delete
//     it when you're done.
//   - You have helper methods in this file. Move them out to keep these resolver files clean.
func (r *queryResolver) GetBookByID(ctx context.Context, id string) (*model.Book, error) {
	var book model.Book

	row := DB.QueryRow(`
		SELECT id, story_id, COALESCE(author, ''), COALESCE(cover_image, ''), 
		date_created, date_updated, default_user_id, COALESCE(foreword, ''), 
		COALESCE(editor, ''), COALESCE(illustrator, ''), COALESCE(isbn_10, ''), COALESCE(isbn_13, ''), 
		COALESCE(num_pages, 0), COALESCE(pub_date, ''), 
		COALESCE(copyright_date, 0), COALESCE(edition, 0), COALESCE(synopsis, ''), 
		COALESCE(title, ''), COALESCE(word_count, 0), COALESCE(sub_title, ''), COALESCE(asin, '')
		FROM books WHERE isbn_13 = ?`, id)

	if err := row.Scan(&book.ID,
		&book.Story_id,
		&book.Author,
		&book.Cover_image,
		&book.Date_created,
		&book.Date_updated,
		&book.Default_user_id,
		&book.Foreword,
		&book.Editor,
		&book.Illustrator,
		&book.Isbn_10,
		&book.Isbn_13,
		&book.Num_pages,
		&book.Pub_date,
		&book.Copyright_date,
		&book.Edition,
		&book.Synopsis,
		&book.Title,
		&book.Word_count,
		&book.Sub_title,
		&book.Asin); err != nil {
		if err == sql.ErrNoRows {
			var mtBook *model.Book
			return mtBook, fmt.Errorf("getBookByID %q: no such book", id)
		}

		return &book, fmt.Errorf("getBookByID %q: %v", id, err)
	}

	return &book, nil
}

var DB, err = DbInitConnection()

func generateID() (string, error) {
	id := make([]byte, 16)
	_, err := rand.Read(id)
	if err != nil {
		return "", err
	}
	return hex.EncodeToString(id), nil
}
