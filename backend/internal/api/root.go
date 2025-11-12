package api

import (
	"net/http"
	"time"

	"github.com/callumb04/clothing-shop/backend/internal/util"
	"go.uber.org/zap"
)

func handleRoot(logger *zap.Logger) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		startTime := time.Now() // Record time http request was received for logging
		util.MessageResponse(w, http.StatusOK, "Server is online", logger, r, startTime)
	}
}
