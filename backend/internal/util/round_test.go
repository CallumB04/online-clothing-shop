package util

import "testing"

func TestRoundTo2DP(t *testing.T) {
	tests := []struct {
		name           string
		value          float64
		expectedResult float64
	}{
		{"1dp to 2dp", 20.0, 20.00},
		{"2dp to 2dp", 6.16, 6.16},
		{"3dp to 2dp, round down", 32.544, 32.54},
		{"3dp to 2dp, round up", 32.546, 32.55},
		{"5dp to 2dp", 1.12345, 1.12},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if result := RoundTo2DP(tt.value); result != tt.expectedResult {
				t.Errorf("incorrect value. expected %f, got %f", tt.expectedResult, result)
			}
		})
	}
}
