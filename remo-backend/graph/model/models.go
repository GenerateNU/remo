package model

import "github.com/jinzhu/gorm"

func FetchConnection() *gorm.DB {
	db, err := gorm.Open("mysql", "remo:pwd@tcp(localhost:3333)/remodb")

	if err != nil {
		panic(err)
	}
	return db
}
