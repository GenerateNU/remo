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
	PORT := os.Getenv("3333")
	DATABASE := os.Getenv("remodb")
	dbconf := USERNAME + ":" + PASSWORD + "@tcp(" + HOST + ":" + PORT + ")/" + DATABASE + "?charset=utf8mb4" + "&parseTime=True"
	//"mysql"
	//os.Getenv("DRIVER")
	db, err := sql.Open("mysql", dbconf)
	if err != nil {
		fmt.Printf("Error connecting to database : error= %q\n", err)
		return nil, err
	}
	return db, err
}

// Test that we are able to successfully connected to database
func TestInit(t *testing.T) {
	var db, err = Init()
	if err != nil {
		t.Errorf("Connection was not successfully established to Remo db.")
	}
	db.Ping()
}
