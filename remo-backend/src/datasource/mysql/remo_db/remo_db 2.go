package remodb

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/go-sql-driver/mysql"
)

var (
	Client   *sql.DB
	username = "remo"
	password = "pwd"
	host     = "127.0.0.1:3213"
	schema   = "remodb"
)

func init() {
	// usernames and passwords
	dataSourceName := fmt.Sprintf("%s:%s@tcp(%s)/%s?charset=utf8", username, password, host, schema)

	var err error
	Client, err = sql.Open("mysql", dataSourceName)
	if err != nil {
		panic(err)
	}

	if err := Client.Ping(); err != nil {
		panic(err)
	}

	log.Println("db_configured")
}
