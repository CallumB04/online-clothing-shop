package models

type Item struct {
	ID         int             `json:"id"`
	Name       string          `json:"name"`
	PriceGBP   float64         `json:"priceGBP"`
	Variations []ItemVariation `json:"variations"`
}

type ItemVariation struct {
	ID           int                  `json:"id"`
	Name         string               `json:"name"`
	PreviewColor string               `json:"previewColor"`
	ImageURL     string               `json:"imageURL"`
	Sizes        []ItemVariationSizes `json:"sizes"`
}

type ItemVariationSizes struct {
	Size  string `json:"size"` // "XS", "S", "M", "L", "XL", "2XL"
	Stock int    `json:"stock"`
}
