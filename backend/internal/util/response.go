package util

import (
	"encoding/json"
	"net/http"
	"time"

	"go.uber.org/zap"
)

// Send JSON response to client.
func JSONResponse(w http.ResponseWriter, status int, data any, logger *zap.Logger, r *http.Request, startTime time.Time) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status) // Set response status code.

	// Send repsonse to client and ignore error.
	_ = json.NewEncoder(w).Encode(data)
	LogRequest(logger, r, startTime)

}

// Send basic message response to client.
func MessageResponse(w http.ResponseWriter, status int, message string, logger *zap.Logger, r *http.Request, startTime time.Time) {
	JSONResponse(w, status, map[string]string{"message": message}, logger, r, startTime)
}

// Send Error message response to client.
func ErrorResponse(w http.ResponseWriter, status int, message string, logger *zap.Logger, r *http.Request, startTime time.Time) {
	JSONResponse(w, status, map[string]string{"error": message}, logger, r, startTime)
}
