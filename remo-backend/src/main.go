package main

import (
	"fmt"
	"os"
	e "remo/backend/src/endpoints"
	"remo/backend/src/model"

	"github.com/jackc/pgx"
)

func main() {
	conn, err := pgx.Connect(pgx.ConnConfig{
		User:     "remo",
		Database: "remodb",
		Password: "pwd",
		Host:     "localhost",
		Port:     3333,
	})
	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to connect to database: %v\n", err)
		os.Exit(1)
	}

	defer conn.Close()

	m := &model.PgModel{
		Conn: conn,
	}
	e := &e.PgController{
		Model: m,
	}
	e.Serve().Run(":8080")
}
