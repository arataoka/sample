// 3桁区切りの数字をNumberに変更
export const formatCurrencyToNumber = (formattedValue: string) => {
  const number = Number(formattedValue.replace(/,/g, ""));
  return isNaN(number) ? 0 : number;
};
