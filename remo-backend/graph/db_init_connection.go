package graph

import (
	"database/sql"
)

func DbInitConnection() (*sql.DB, error) {
	//config := mysql.Config{
	//	User:   os.Getenv("remo"),
	//	Passwd: os.Getenv("pwd"),
	//	Net:    "tcp",
	//	Addr:   os.Getenv("127.0.0.1:3333"),
	//	DBName: "remodb",
	//}
	//USERNAME := os.Getenv("remo")
	//PASSWORD := os.Getenv("pwd")
	//HOST := os.Getenv("127.0.0.1")
	//PORT := os.Getenv("3333")
	//DATABASE := os.Getenv("remodb")
	//dbconf := USERNAME + ":" + PASSWORD + "@tcp(" + HOST + ":" + PORT + ")/" + DATABASE + "?charset=utf8mb4" + "&parseTime=True"
	//"mysql"
	//"DRIVER"
	//os.Getenv("mysql")

	//db, err := sql.Open("mysql", config.FormatDSN())
	//if err != nil {
	//	fmt.Printf("Error connecting to database : error= %q\n", err)
	//	return nil, err
	//}
	//pingErr := db.Ping()
	//if pingErr != nil {
	//	fmt.Printf("Ping error: %q", pingErr)
	//}

	db, err := sql.Open("mysql", "remo:pwd@tcp(localhost:3333)/remodb")
	if err != nil {
		print("Failed to connect to database:", err)
	}

	err = db.Ping()
	if err != nil {
		print("Failed to ping database:", err)
	}

	rows, err := db.Query("SELECT * FROM books")
	if err != nil {
		print("Failed to query database:", err)
	}
	defer rows.Close()

	for rows.Next() {
		var col1, col2 string
		err := rows.Scan(&col1, &col2)
		if err != nil {
			// Handle error
		}
		// Process the query result
	}
	print(rows)

	return db, err
}
