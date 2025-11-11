//go:build mockitems

package data

import "github.com/callumb04/clothing-shop/backend/internal/models"

func LoadItems() ([]models.Item, error) {

	jeansDiscount := 22.99

	return []models.Item{
		{ID: "0", Name: "T-Shirt", Gender: "M", Categories: []string{}, PriceGBP: 10.00, Variations: []models.ItemVariation{}},
		{ID: "1", Name: "Jeans", Gender: "W", Categories: []string{}, PriceGBP: 29.99, DiscountPriceGBP: &jeansDiscount, Variations: []models.ItemVariation{}},
		{ID: "2", Name: "Sweater", Gender: "M", Categories: []string{}, PriceGBP: 12.95, Variations: []models.ItemVariation{}},
	}, nil
}
