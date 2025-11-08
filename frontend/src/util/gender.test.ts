import { describe, expect, it } from "vitest";
import { addApostropheToGender } from "./gender";

describe("addApostropheToGender()", () => {
    it("mens lowercase", () => {
        expect(addApostropheToGender("mens")).toBe("Men's");
    });
    it("womens lowercase", () => {
        expect(addApostropheToGender("womens")).toBe("Women's");
    });
    it("mens uppercase", () => {
        expect(addApostropheToGender("MENS")).toBe("Men's");
    });
    it("womens uppercase", () => {
        expect(addApostropheToGender("WOMENS")).toBe("Women's");
    });
    it("mens capitalized", () => {
        expect(addApostropheToGender("Mens")).toBe("Men's");
    });
    it("womens capitalized", () => {
        expect(addApostropheToGender("Womens")).toBe("Women's");
    });
    it("random string", () => {
        expect(addApostropheToGender("hello123")).toBe("hello123");
    });
});
