package checkout

import (
	"errors"
	"testing"

	"github.com/callumb04/clothing-shop/backend/internal/models"
)

func TestCalculateBasketTotal(t *testing.T) {
	tests := []struct {
		name          string
		basket        models.Basket
		discount      float64
		expectedTotal float64
		expectedErr   error
	}{
		{"empty basket no discount", models.Basket{}, 0.0, 0.0, ErrEmptyBasket},
		{"empty basket with discount", models.Basket{}, 0.2, 0.0, ErrEmptyBasket},
		{"1 item", models.Basket{
			{ItemID: "0", VariationID: "0", Size: "M", Quantity: 1},
		}, 0.0, 10.00, nil},
		{"2 items", models.Basket{
			{ItemID: "0", VariationID: "0", Size: "M", Quantity: 1},
			{ItemID: "2", VariationID: "0", Size: "M", Quantity: 1},
		}, 0.0, 22.95, nil},
		{"2 items with 30% discount", models.Basket{
			{ItemID: "0", VariationID: "0", Size: "M", Quantity: 1},
			{ItemID: "2", VariationID: "0", Size: "M", Quantity: 1},
		}, 0.3, 16.06, nil},
		{"discounted item", models.Basket{
			{ItemID: "1", VariationID: "0", Size: "M", Quantity: 1},
		}, 0.0, 22.99, nil},
		{"discounted item with 10% discount", models.Basket{
			{ItemID: "1", VariationID: "0", Size: "M", Quantity: 1},
		}, 0.1, 20.69, nil},
		{"discounted and non discounted items", models.Basket{
			{ItemID: "0", VariationID: "0", Size: "M", Quantity: 1},
			{ItemID: "1", VariationID: "0", Size: "M", Quantity: 1},
		}, 0.0, 32.99, nil},
		{"discounted and non discounted items with 20% discount", models.Basket{
			{ItemID: "0", VariationID: "0", Size: "M", Quantity: 1},
			{ItemID: "1", VariationID: "0", Size: "M", Quantity: 1},
		}, 0.2, 26.39, nil},
		{"2 items with quantity of 2", models.Basket{
			{ItemID: "0", VariationID: "0", Size: "M", Quantity: 2},
			{ItemID: "2", VariationID: "0", Size: "M", Quantity: 2},
		}, 0.0, 45.90, nil},
		{"discounted and non discounted items with varying quantities", models.Basket{
			{ItemID: "0", VariationID: "0", Size: "M", Quantity: 1},
			{ItemID: "1", VariationID: "0", Size: "M", Quantity: 3},
			{ItemID: "2", VariationID: "0", Size: "M", Quantity: 2},
		}, 0.0, 104.87, nil},
		{"discounted and non discounted items with varying quantities and 20% discount", models.Basket{
			{ItemID: "0", VariationID: "0", Size: "M", Quantity: 1},
			{ItemID: "1", VariationID: "0", Size: "M", Quantity: 3},
			{ItemID: "2", VariationID: "0", Size: "M", Quantity: 2},
		}, 0.2, 83.90, nil},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result, err := CalculateBasketTotal(tt.basket, &tt.discount)

			// Handle errors
			if tt.expectedErr != nil && !errors.Is(err, tt.expectedErr) {
				t.Errorf("expected error %v, got %v", tt.expectedErr, err)
			}
			if tt.expectedErr == nil && err != nil {
				t.Errorf("unexpected error: %v", err)
			}

			// Handle incorrect total
			if result != tt.expectedTotal {
				t.Errorf("incorrect total. expected %.2f, got %.2f", tt.expectedTotal, result)
			}

		})
	}
}
