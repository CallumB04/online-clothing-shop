package util

import (
	"fmt"
	"net/http"
	"time"

	"go.uber.org/zap"
)

// Logs basic info from http requests to backend
func LogRequest(logger *zap.Logger, r *http.Request, startTime time.Time) {
	// Calculate time since request was received, giving time taken for response
	duration := time.Since(startTime).Milliseconds()

	// Logging basic request info
	logger.Info("req",
		zap.String("method", r.Method),
		zap.String("path", r.URL.Path),
		zap.String("duration", fmt.Sprintf("%dms", duration)),
	)
}
