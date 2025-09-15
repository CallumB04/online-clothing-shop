package api

import (
	"net/http"

	"github.com/callumb04/online-clothing-shop/backend/internal/data"
	"github.com/callumb04/online-clothing-shop/backend/internal/util"
)

func handleGetItems() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		items, err := data.LoadItems()

		if err != nil {
			util.ErrorResponse(w, http.StatusInternalServerError, "failed to loads items")
		}

		util.JSONResponse(w, http.StatusOK, items)
	}
}
