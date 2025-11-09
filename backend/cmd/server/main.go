package main

import (
	"fmt"
	"net/http"

	"github.com/callumb04/clothing-shop/backend/internal/api"
	"github.com/rs/cors"
)

func main() {
	// Create new multiplexer and register handlers to routes.
	mux := http.NewServeMux()
	api.RegisterHandlers(mux)

	// Configure CORS
	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:5173"}, // frontend
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE"},
		AllowedHeaders:   []string{"Content-Type"},
		AllowCredentials: true,
	})

	// Start server on port 8080.
	fmt.Println("Server is online!")
	handler := c.Handler(mux)
	http.ListenAndServe(":8080", handler)
}
