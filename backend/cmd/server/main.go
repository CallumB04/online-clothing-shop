package main

import (
	"fmt"
	"net/http"

	"github.com/callumb04/online-clothing-shop/backend/internal/api"
)

func main() {
	// Create new multiplexer and register handlers to routes.
	mux := http.NewServeMux()
	api.RegisterHandlers(mux)

	// Start server on port 8080.
	fmt.Println("Server is online!")
	http.ListenAndServe(":8080", mux)
}
