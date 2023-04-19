package main

import (
	"database/sql"
	"fmt"
	"os"
	c "remo/backend/src/controller"
	"remo/backend/src/model"

	_ "github.com/go-sql-driver/mysql"
)

func main() {
	conn, err := sql.Open("mysql", "remo:pwd@tcp(localhost:3333)/remodb")

	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to connect to database: %v\n", err)
		os.Exit(1)
	}

	defer conn.Close()

	m := &model.MsModel{
		Conn: conn,
	}
	c := &c.MsController{
		Model: m,
	}
	c.Serve().Run(":8080")

	// literally just added a line calling main function of server.go
	//server.InitServer()
}
