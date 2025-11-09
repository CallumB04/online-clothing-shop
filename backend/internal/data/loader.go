package data

import (
	"encoding/json"
	"os"

	"github.com/callumb04/clothing-shop/backend/internal/models"
)

const itemsFilePath string = "data/items.json"

// Read items.json and return a slice of Item objects.
func LoadItems() ([]models.Item, error) {
	// Read data from file.
	data, err := os.ReadFile(itemsFilePath)

	if err != nil {
		return nil, err
	}

	// Create slice for items and parse raw json data.
	var items []models.Item
	if err := json.Unmarshal(data, &items); err != nil {
		return nil, err
	}

	return items, nil
}
