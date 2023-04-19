package server

//package main

import (
	"remo/backend/graph"

	"github.com/gin-gonic/gin"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
)

// Defining the Graphql handler
func GraphqlHandler() gin.HandlerFunc {
	// NewExecutableSchema and Config are in the generated.go file
	// Resolver is in the resolver.go file
	h := handler.NewDefaultServer(graph.NewExecutableSchema(graph.Config{Resolvers: &graph.Resolver{}}))

	return func(c *gin.Context) {
		h.ServeHTTP(c.Writer, c.Request)
	}
}

// Defining the Playground handler
func PlaygroundHandler() gin.HandlerFunc {
	h := playground.Handler("GraphQL", "/v1/query")

	return func(c *gin.Context) {
		h.ServeHTTP(c.Writer, c.Request)
	}
}

// func InitServer() {
// 	// Setting up Gin
// 	//Migrate Db
// 	db := model.FetchConnection()
// 	db.AutoMigrate(&model.Book{})
// 	defer db.Close()

// 	r := gin.Default()
// 	r.POST("/query", GraphqlHandler())
// 	r.GET("/", playgroundHandler())
// 	r.Run()
// }
