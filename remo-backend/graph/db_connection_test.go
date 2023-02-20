package graph

import (
	"database/sql"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"os"
	"testing"
)

func Init() (*sql.DB, error) {
	USERNAME := os.Getenv("remo")
	PASSWORD := os.Getenv("pwd")
	HOST := os.Getenv("127.0.0.1")
	PORT := os.Getenv("3213")
	DATABASE := os.Getenv("remodb")
	dbconf := USERNAME + ":" + PASSWORD + "@tcp(" + HOST + ":" + PORT + ")/" + DATABASE + "?charset=utf8mb4" + "&parseTime=True"
	db, err := sql.Open(os.Getenv("DRIVER"), dbconf)
	if err != nil {
		fmt.Printf("Error connecting to database : error= %q\n", err)
		return nil, err
	}
	return db, err
}

func TestInitConnection(t *testing.T) {
	print(Init())
}
