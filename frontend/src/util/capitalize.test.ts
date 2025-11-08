import { describe, expect, it } from "vitest";
import { capitalize } from "./capitalize";

describe("capitalize()", () => {
    it("full uppercase input", () => {
        expect(capitalize("HELLO")).toBe("HELLO");
    });
    it("full lowercase input", () => {
        expect(capitalize("hello")).toBe("Hello");
    });
    it("already capitalized input", () => {
        expect(capitalize("Hello")).toBe("Hello");
    });
    it("number first character", () => {
        expect(capitalize("1hello")).toBe("1hello");
    });
    it("symbol first character", () => {
        expect(capitalize("#hello")).toBe("#hello");
    });
    it("space first character", () => {
        expect(capitalize(" hello")).toBe(" hello");
    });
    it("empty string", () => {
        expect(capitalize("")).toBe("");
    });
    it("singular character", () => {
        expect(capitalize("a")).toBe("A");
    });
    it("two characters", () => {
        expect(capitalize("ab")).toBe("Ab");
    });
    it("emoji", () => {
        expect(capitalize("⚠️")).toBe("⚠️");
    });
    it("3 emojis", () => {
        expect(capitalize("⚠️⚠️⚠️")).toBe("⚠️⚠️⚠️");
    });
    it("singular latin character", () => {
        expect(capitalize("ä")).toBe("Ä");
    });
    it("latin first character", () => {
        expect(capitalize("äbc")).toBe("Äbc");
    });
});
