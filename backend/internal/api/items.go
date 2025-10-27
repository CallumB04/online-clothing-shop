package api

import (
	"fmt"
	"net/http"
	"strings"

	"github.com/callumb04/online-clothing-shop/backend/internal/data"
	"github.com/callumb04/online-clothing-shop/backend/internal/models"
	"github.com/callumb04/online-clothing-shop/backend/internal/util"
)

func handleGetItems() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		items, err := data.LoadItems()

		if err != nil {
			util.ErrorResponse(w, http.StatusInternalServerError, "failed to load items")
			return
		}

		gender := r.URL.Query().Get("gender") // "M" / "W"

		if gender != "" {
			var filteredItems []models.Item

			for _, item := range items {
				if item.Gender == gender {
					filteredItems = append(filteredItems, item)
				}
			}
			// Return filtered items
			util.JSONResponse(w, http.StatusOK, filteredItems)
			return
		}

		// Return all items if no filters are passed in request
		util.JSONResponse(w, http.StatusOK, items)
	}
}

func handleGetItemByID() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {

		// Retrive item ID from api endpoint and trim whitespace.
		id := r.PathValue("id")
		id = strings.TrimSpace(id)

		// Return error if missing ID.
		if id == "" {
			util.ErrorResponse(w, http.StatusBadRequest, "missing item ID")
			return
		}

		items, err := data.LoadItems()

		if err != nil {
			util.ErrorResponse(w, http.StatusInternalServerError, "failed to load items")
			return
		}

		// Find item with matching ID and send to client.
		for _, item := range items {
			if item.ID == id {
				util.JSONResponse(w, http.StatusOK, item)
				return
			}
		}

		// Return error if item with request ID was not found.
		util.ErrorResponse(w, http.StatusNotFound, fmt.Sprintf("item (ID: %s) does not exist", id))
	}
}
