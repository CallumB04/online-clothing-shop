package models

type Basket struct {
	Items    []BasketItem `json:"items"`
	Discount float64      `json:"discount"` // 0.1 -> 10%
}

type BasketItem struct {
	ItemID   int `json:"itemID"`
	Quantity int `json:"quantity"`
}
