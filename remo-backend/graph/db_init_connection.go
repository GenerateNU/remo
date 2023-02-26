package graph

import (
	"database/sql"
	"fmt"
	"github.com/go-sql-driver/mysql"
	"os"
)

func DbInitConnection() (*sql.DB, error) {
	config := mysql.Config{
		User:   os.Getenv("remo"),
		Passwd: os.Getenv("pwd"),
		Net:    "tcp",
		Addr:   os.Getenv("127.0.0.1:3333"),
		DBName: "remodb",
	}
	//USERNAME := os.Getenv("remo")
	//PASSWORD := os.Getenv("pwd")
	//HOST := os.Getenv("127.0.0.1")
	//PORT := os.Getenv("3333")
	//DATABASE := os.Getenv("remodb")
	//dbconf := USERNAME + ":" + PASSWORD + "@tcp(" + HOST + ":" + PORT + ")/" + DATABASE + "?charset=utf8mb4" + "&parseTime=True"
	//"mysql"
	//"DRIVER"
	//os.Getenv("mysql")
	db, err := sql.Open("mysql", config.FormatDSN())
	if err != nil {
		fmt.Printf("Error connecting to database : error= %q\n", err)
		return nil, err
	}
	pingErr := db.Ping()
	if pingErr != nil {
		fmt.Printf("get shit on: %q", pingErr)
	}
	return db, err
}
