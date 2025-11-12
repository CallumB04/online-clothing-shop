package api

import (
	"encoding/json"
	"net/http"
	"time"

	"github.com/callumb04/clothing-shop/backend/internal/checkout"
	"github.com/callumb04/clothing-shop/backend/internal/models"
	"github.com/callumb04/clothing-shop/backend/internal/util"
	"go.uber.org/zap"
)

type requestBody struct {
	Basket   models.Basket `json:"basket"`
	Discount *float64      `json:"discount"` // optional discount
}

type responseBody struct {
	Total           float64 `json:"total"`
	DiscountedTotal float64 `json:"discountedTotal"`
}

func handleCheckout(logger *zap.Logger) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		startTime := time.Now() // Record time http request was received for logging

		// Decode request body into variable
		var body requestBody
		if err := json.NewDecoder(r.Body).Decode(&body); err != nil {
			util.ErrorResponse(w, http.StatusBadRequest, "invalid request", logger, r, startTime)
			return
		}

		// Extract fields from request body
		basket := body.Basket
		discount := body.Discount

		// Calculate basket price, optional discount
		total, discountedTotal, err := checkout.CalculateBasketTotal(basket, discount)
		if err != nil {
			util.ErrorResponse(w, http.StatusInternalServerError, "failed to calculate total", logger, r, startTime)
			return
		}

		response := responseBody{Total: total, DiscountedTotal: discountedTotal}

		util.JSONResponse(w, http.StatusOK, response, logger, r, startTime)
		util.LogRequest(logger, r, startTime)
	}
}
