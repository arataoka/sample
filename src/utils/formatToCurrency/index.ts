export const formatToCurrency = (value: string) => {
  // 全角数字を半角数字に変換
  const halfWidthValue = value.replace(/[０-９]/g, (char) =>
    String.fromCharCode(char.charCodeAt(0) - 0xfee0)
  );

  // 数字以外が含まれている場合は、そのままの文字列を返す
  if (!/^\d+$/.test(halfWidthValue)) return value;

  // parseIntで数値に変換し、toLocaleStringでフォーマット
  return parseInt(halfWidthValue, 10).toLocaleString("ja-JP");
};

export const extractNumberString = (value: string) => {
  // 文字列から数字のみを抽出
  return value.replace(/[^0-9０-９]/g, "");
};
