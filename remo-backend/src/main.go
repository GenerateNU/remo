package main

import (
	e "remo/backend/src/endpoints"
)

func main() {
	e.Serve().Run(":8080")
}
