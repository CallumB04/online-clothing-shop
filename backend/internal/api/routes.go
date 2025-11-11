package api

import "net/http"

// Register route handlers to given patterns.
func RegisterHandlers() *http.ServeMux {
	// Create multiplexer.
	mux := http.NewServeMux()

	// Root
	mux.Handle("GET /", handleRoot())
	// Items
	mux.Handle("GET /items", handleGetItems())
	mux.Handle("GET /items/{id}", handleGetItemByID())
	// Checkout
	mux.Handle("POST /checkout", handleCheckout())

	// Return multiplexer to main function for starting server.
	return mux
}
