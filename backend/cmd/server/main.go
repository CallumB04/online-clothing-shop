package main

import (
	"net/http"

	"github.com/callumb04/clothing-shop/backend/internal/api"
	"github.com/rs/cors"
	"go.uber.org/zap"
)

func main() {
	// Create logger, will be passed to all handler functions for request Logging.
	logger, _ := zap.NewDevelopment()
	defer logger.Sync()

	// Create multiplexer and register handlers to routes.
	mux := api.RegisterHandlers(logger)

	// Configure CORS
	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:5173"}, // frontend
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE"},
		AllowedHeaders:   []string{"Content-Type"},
		AllowCredentials: true,
	})

	// Start server on port 8080.
	logger.Info("Starting the application...", zap.Int("port", 8080))
	handler := c.Handler(mux)
	http.ListenAndServe(":8080", handler)
}
