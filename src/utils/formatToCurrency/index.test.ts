import { describe, it, expect } from "vitest";
import { extractNumberString, formatToCurrency } from ".";

describe("extractNumberString", () => {
  it("文字列から数字のみが抽出される", () => {
    expect(extractNumberString("¥^@[_/,>?a1b2c3")).toBe("123");
  });

  it("数字が含まれない文字列では空文字列が返される", () => {
    expect(extractNumberString("abc")).toBe("");
  });

  it("数字のみの文字列ではそのままの文字列が返される", () => {
    expect(extractNumberString("123")).toBe("123");
  });

  it("全角数字はそのまま抽出される", () => {
    expect(extractNumberString("あ1いう１２３えお")).toBe("1１２３");
  });
});

describe("formatToCurrency", () => {
  it("数値のみの文字列が正しくフォーマットされる", () => {
    expect(formatToCurrency("1234567")).toBe("1,234,567");
  });

  it("数字以外が含まれている文字列がそのまま返される", () => {
    expect(formatToCurrency("1234abc")).toBe("1234abc");
  });

  it("空文字列がそのまま返される", () => {
    expect(formatToCurrency("")).toBe("");
  });

  it("全角数字を含む文字列が半角に変換されフォーマットされる", () => {
    expect(formatToCurrency("１1２３４５６７")).toBe("11,234,567");
  });

  it("先頭のゼロが削除される", () => {
    expect(formatToCurrency("000012345")).toBe("12,345");
  });

  it("0のみの場合は0が返される", () => {
    expect(formatToCurrency("000")).toBe("0");
  });
});
