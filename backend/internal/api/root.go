package api

import (
	"net/http"

	"github.com/callumb04/online-clothing-shop/backend/internal/util"
)

func rootHandler() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		util.MessageResponse(w, http.StatusOK, "Server is online")
	}
}
