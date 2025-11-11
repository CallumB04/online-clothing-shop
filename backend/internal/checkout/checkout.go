package checkout

import (
	"errors"

	"github.com/callumb04/clothing-shop/backend/internal/data"
	"github.com/callumb04/clothing-shop/backend/internal/models"
	"github.com/callumb04/clothing-shop/backend/internal/util"
)

var ErrEmptyBasket = errors.New("empty basket")

// Calculate total price of basket.
// Returns total, discounted total (or total if no discount), error
func CalculateBasketTotal(basket models.Basket, discount *float64) (float64, float64, error) {
	// Return no price if empty basket
	if len(basket) == 0 {
		return 0.0, 0.0, ErrEmptyBasket
	}

	items, err := data.LoadItems()

	// Return error if items failed to load
	if err != nil {
		return 0.0, 0.0, err
	}

	var total float64 = 0

	// Iterate through all items in basket
	for _, bi := range basket {
		// Find item data of that basket item and add to total
		for _, i := range items {
			if i.ID == bi.ItemID {
				if i.DiscountPriceGBP != nil {
					total += (*i.DiscountPriceGBP * float64(bi.Quantity)) // Add discount price if exists
				} else {
					total += (i.PriceGBP * float64(bi.Quantity)) // Add full price
				}
			}
		}
	}

	// Return basket total and discounted total
	if discount != nil {
		discountTotal := CalculateBasketTotalAfterDiscount(total, *discount)
		return util.RoundTo2DP(total), util.RoundTo2DP(discountTotal), nil
	}

	// Return basket total for both fields
	return util.RoundTo2DP(total), util.RoundTo2DP(total), nil
}
