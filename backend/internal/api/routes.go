package api

import "net/http"

// Register route handlers to given patterns.
func RegisterHandlers(mux *http.ServeMux) {
	// Root
	mux.Handle("GET /", handleRoot())
	// Items
	mux.Handle("GET /items", handleGetItems())
	mux.Handle("GET /items/{id}", handleGetItemByID())
}
