package models

type Basket struct {
	Items    []BasketItem `json:"items"`
	Discount float64      `json:"discount"` // 0.1 -> 10%
}

type BasketItem struct {
	ItemID      int    `json:"itemID"`
	VariationID int    `json:"variationID"`
	Size        string `json:"size"`
	Quantity    int    `json:"quantity"`
}
