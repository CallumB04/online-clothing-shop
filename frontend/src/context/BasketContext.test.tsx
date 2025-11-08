import { describe, expect, it } from "vitest";
import { checkBasketItemMatch } from "./BasketContext";

describe("checkBasketItemMatch()", () => {
    it("returns true for matching items with same quantity", () => {
        const item1 = { itemID: "0", variationID: "1", size: "S", quantity: 1 };
        const item2 = { itemID: "0", variationID: "1", size: "S", quantity: 1 };
        expect(checkBasketItemMatch(item1, item2)).toBeTruthy();
    });
    it("returns true for matching items with different quantity", () => {
        const item1 = { itemID: "0", variationID: "1", size: "S", quantity: 1 };
        const item2 = { itemID: "0", variationID: "1", size: "S", quantity: 3 };
        expect(checkBasketItemMatch(item1, item2)).toBeTruthy();
    });
    it("returns false for non-matching size", () => {
        const item1 = { itemID: "0", variationID: "1", size: "S", quantity: 1 };
        const item2 = { itemID: "0", variationID: "1", size: "M", quantity: 1 };
        expect(checkBasketItemMatch(item1, item2)).toBeFalsy();
    });
    it("returns false for non-matching variation id", () => {
        const item1 = { itemID: "0", variationID: "1", size: "S", quantity: 1 };
        const item2 = { itemID: "0", variationID: "2", size: "S", quantity: 1 };
        expect(checkBasketItemMatch(item1, item2)).toBeFalsy();
    });
    it("returns false for non-matching variation and size", () => {
        const item1 = { itemID: "0", variationID: "1", size: "S", quantity: 1 };
        const item2 = { itemID: "0", variationID: "2", size: "M", quantity: 1 };
        expect(checkBasketItemMatch(item1, item2)).toBeFalsy();
    });
    it("returns false for non-matching item id", () => {
        const item1 = { itemID: "0", variationID: "1", size: "S", quantity: 1 };
        const item2 = { itemID: "1", variationID: "1", size: "S", quantity: 1 };
        expect(checkBasketItemMatch(item1, item2)).toBeFalsy();
    });
});
