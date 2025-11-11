package checkout

import "testing"

func TestCalculateBasketTotalAfterDiscount(t *testing.T) {
	tests := []struct {
		name          string
		price         float64
		discount      float64
		expectedTotal float64
	}{
		{"no discount", 20.0, 0.0, 20.0},
		{"full discount", 10.0, 1.0, 0.0},
		{"20% discount", 55.0, 0.2, 44.0},
		{"no initial price", 0.0, 0.3, 0.0},
		{"negative price", -5.0, 0.2, 0.0},
		{"negative discount", 22.0, -0.4, 22.0},
		{">100% discount", 40, 1.2, 0.0},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if result := CalculateBasketTotalAfterDiscount(tt.price, tt.discount); result != tt.expectedTotal {
				t.Errorf("incorrect total. expected %f, got %f", tt.expectedTotal, result)
			}
		})
	}
}
