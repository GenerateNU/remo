package main

import (
	e "remo/backend/src/endpoints"
)

func main() {

	// connection string 
	// SQL.open will create this connection string 
	e.Serve().Run(":8080")
}
