package main

import (
	"database/sql"
	"fmt"
	"os"
	e "remo/backend/src/endpoints"
	"remo/backend/src/model"

	_ "github.com/go-sql-driver/mysql"
)

func main() {
	conn, err := sql.Open("mysql", "user:pwd@tcp(localhost:3333)/remodb")

	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to connect to database: %v\n", err)
		os.Exit(1)
	}

	defer conn.Close()

	m := &model.MsModel{
		Conn: conn,
	}
	c := &e.MsController{
		Model: m,
	}
	c.Serve().Run(":8080")
}
