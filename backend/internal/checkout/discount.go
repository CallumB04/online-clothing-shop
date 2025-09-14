package checkout

// Calculate total price of basket after discount
func CalculateTotalAfterDiscount(price float64, discount float64) float64 {
	if price <= 0.0 {
		return 0.0
	}

	if discount <= 0.0 {
		return price
	}

	if discount > 1.0 {
		discount = 1.0
	}

	return price * (1.0 - discount)
}
