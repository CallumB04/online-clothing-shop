package api

import "net/http"

// Register route handlers to given patterns.
func RegisterHandlers(mux *http.ServeMux) {
	// Root
	mux.Handle("GET /", rootHandler())
}
