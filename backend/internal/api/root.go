package api

import (
	"net/http"

	"github.com/callumb04/online-clothing-shop/backend/internal/util"
)

func handleRoot() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		util.MessageResponse(w, http.StatusOK, "Server is online")
	}
}
