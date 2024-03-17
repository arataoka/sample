import { Category, ValidationRule } from "../../../generated/@types";
import { RefinementCtx, ZodIssueCode } from "zod";
import { ItemData } from "../scheme";
import { formatCurrencyToNumber } from "../../../utils/formatCurrencyToNumber";

type ValidationArgs = {
  item: ItemData;
  rule: {
    price?: ValidationRule;
    payee?: ValidationRule;
    date?: ValidationRule;
    categoryName: string;
  };
  validationContext: RefinementCtx;
  index: number;
};

// APIレスポンスからバリデーションルールを抽出
export const extractValidationRules = (categories: Category[]) => {
  return categories.map((category) => ({
    categoryName: String(category.name),
    ...category.rules,
  }));
};

/* APIレスポンスルール */
// 金額ルール
export const validatePrice = ({
  item,
  rule,
  validationContext,
  index,
}: ValidationArgs) => {
  // 最大金額ルール
  const itemPrice = formatCurrencyToNumber(item.price);
  const maxAmount = rule.price?.maxAmount ?? null;
  if (maxAmount !== null && itemPrice > maxAmount) {
    validationContext.addIssue({
      path: [`items.${index}.price`],
      message: `価格は${maxAmount}円以下である必要があります。`,
      code: ZodIssueCode.custom,
    });
  }
};

// 支払先ルール
export const validatePayee = ({
  item,
  rule,
  validationContext,
  index,
}: ValidationArgs) => {
  // 必須入力
  const isRequiredPayee = rule.payee?.isRequired;
  if (isRequiredPayee && !item.payee) {
    validationContext.addIssue({
      path: [`items.${index}.payee`],
      message: `${rule.categoryName}の支払先は必須です。`,
      code: ZodIssueCode.custom,
    });
  }
};
