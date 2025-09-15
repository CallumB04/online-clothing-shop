package models

type Item struct {
	ID         int             `json:"id"`
	Name       string          `json:"name"`
	Price      float64         `json:"price"`
	Variations []ItemVariation `json:"variations"`
}

type ItemVariation struct {
	ID           int      `json:"id"`
	Name         string   `json:"name"`
	PreviewColor string   `json:"previewColor"`
	Stock        int      `json:"stock"`
	ImageURL     string   `json:"imageURL"`
	Sizes        []string `json:"sizes"` // ["XS", "S", "M", "L", "XL", "2XL"]
}
