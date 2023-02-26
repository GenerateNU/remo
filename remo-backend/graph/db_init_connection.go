package graph

import (
	"database/sql"
)

func DbInitConnection() (*sql.DB, error) {
	db, err := sql.Open("mysql", "remo:pwd@tcp(localhost:3333)/remodb")
	if err != nil {
		print("Failed to connect to database:", err)
	}

	err = db.Ping()
	if err != nil {
		print("Failed to ping database:", err)
	}

	return db, err
}
