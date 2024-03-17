import { describe, it, expect } from "vitest";
import { formatCurrencyToNumber } from ".";

describe("formatCurrencyToNumber", () => {
  it("カンマが全てなくなりNumber型になる", () => {
    expect(formatCurrencyToNumber("123,456,789")).toBe(123456789);
  });

  it("Number型に変換", () => {
    expect(formatCurrencyToNumber("123")).toBe(123);
  });

  it("空文字の場合は0になる", () => {
    expect(formatCurrencyToNumber("")).toBe(0);
  });
});
