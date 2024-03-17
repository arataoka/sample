import { describe, it, expect, vi } from "vitest";
import { executeOnSecondClick } from "./index";

describe("executeOnSecondClick", () => {
  it("2回目以外のクリックは呼ばれない", () => {
    const mockCallback = vi.fn();
    executeOnSecondClick(mockCallback);

    // 最初のクリック
    window.dispatchEvent(new MouseEvent("click"));
    expect(mockCallback).not.toHaveBeenCalled();

    // 2回目のクリック
    window.dispatchEvent(new MouseEvent("click"));
    expect(mockCallback).toHaveBeenCalledTimes(1);

    // 3回目のクリック
    window.dispatchEvent(new MouseEvent("click"));
    expect(mockCallback).toHaveBeenCalledTimes(1);

    // 4回目のクリック
    window.dispatchEvent(new MouseEvent("click"));
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
});
