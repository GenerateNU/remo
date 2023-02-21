package graph

import (
	"database/sql"
	"fmt"
	"os"
)

func DbInitConnection() (*sql.DB, error) {
	USERNAME := os.Getenv("localhost")
	PASSWORD := os.Getenv("pwd")
	HOST := os.Getenv("127.0.0.1")
	PORT := os.Getenv("3306")
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
