package api

import (
	"encoding/json"
	"net/http"

	"github.com/callumb04/clothing-shop/backend/internal/checkout"
	"github.com/callumb04/clothing-shop/backend/internal/models"
	"github.com/callumb04/clothing-shop/backend/internal/util"
)

type requestBody struct {
	Basket   models.Basket `json:"basket"`
	Discount *float64      `json:"discount"` // optional discount
}

type responseBody struct {
	Total           float64 `json:"total"`
	DiscountedTotal float64 `json:"discountedTotal"`
}

func handleCheckout() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// Decode request body into variable
		var body requestBody
		if err := json.NewDecoder(r.Body).Decode(&body); err != nil {
			util.ErrorResponse(w, http.StatusBadRequest, "invalid request")
			return
		}

		// Extract fields from request body
		basket := body.Basket
		discount := body.Discount

		// Calculate basket price, optional discount
		total, discountedTotal, err := checkout.CalculateBasketTotal(basket, discount)
		if err != nil {
			util.ErrorResponse(w, http.StatusInternalServerError, "failed to calculate total")
			return
		}

		response := responseBody{Total: total, DiscountedTotal: discountedTotal}

		util.JSONResponse(w, http.StatusOK, response)
	}
}
