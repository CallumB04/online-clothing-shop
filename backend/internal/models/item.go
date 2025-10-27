package models

type Item struct {
	ID         string          `json:"id"`
	Name       string          `json:"name"`
	Gender     string          `json:"gender"` // "M" / "W"
	PriceGBP   float64         `json:"priceGBP"`
	Variations []ItemVariation `json:"variations"`
}

type ItemVariation struct {
	ID           string              `json:"id"`
	Name         string              `json:"name"`
	PreviewColor string              `json:"previewColor"`
	ImageURL     string              `json:"imageURL"`
	Sizes        []ItemVariationSize `json:"sizes"`
}

type ItemVariationSize struct {
	Size  string `json:"size"` // "XS", "S", "M", "L", "XL", "2XL"
	Stock int    `json:"stock"`
}
