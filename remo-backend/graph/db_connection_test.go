package graph

import (
	_ "github.com/go-sql-driver/mysql"
	"testing"
)

// Test that we are able to successfully connected to database
func TestDbInitConnection(t *testing.T) {
	var db, err = DbInitConnection()
	if err != nil {
		t.Errorf("Connection was not successfully established to Remo db.")
	}
	db.Ping()
}
