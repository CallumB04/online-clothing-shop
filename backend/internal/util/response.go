package util

import (
	"encoding/json"
	"net/http"
)

// Send JSON response to client.
func JSONResponse(w http.ResponseWriter, status int, data any) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status) // Set response status code.

	// Send repsonse to client and ignore error.
	_ = json.NewEncoder(w).Encode(data)

}

// Send basic message response to client.
func MessageResponse(w http.ResponseWriter, status int, message string) {
	JSONResponse(w, status, map[string]string{"message": message})
}

// Send Error message response to client.
func ErrorResponse(w http.ResponseWriter, status int, message string) {
	JSONResponse(w, status, map[string]string{"error": message})
}
