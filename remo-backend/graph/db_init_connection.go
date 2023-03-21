package graph

import (
	"database/sql"
)

// DbInitConnection
// Initialize a connection to the database.
func DbInitConnection() (*sql.DB, error) {
	db, err := sql.Open("mysql", "remo:pwd@tcp(localhost:3333)/remodb?parseTime=true")
	if err != nil {
		print("Failed to connect to database:", err)
	}

	// After establishing conneciton, ping the database
	err = db.Ping()
	if err != nil {
		print("Failed to ping database:", err)
	}

	return db, err
}
