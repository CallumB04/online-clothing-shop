package models

type Basket = []BasketItem

type BasketItem struct {
	ItemID      string `json:"itemID"`
	VariationID string `json:"variationID"`
	Size        string `json:"size"`
	Quantity    int    `json:"quantity"`
}
