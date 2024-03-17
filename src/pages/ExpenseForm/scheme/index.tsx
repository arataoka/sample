/* eslint-disable @typescript-eslint/naming-convention */ // NOTE:zodのkeyは対象外とするため
import { z } from "zod";
import { DEFAULT_VALIDATION_ERROR_MESSAGES as ERROR } from "../constants";
import { ValidationRule } from "../../../generated/@types";
import { validatePayee, validatePrice } from "../utils/validation";
import { formatCurrencyToNumber } from "../../../utils/formatCurrencyToNumber";

const MIN_LETTER_LENGTH = 1;

export type ExpenseFormData = z.infer<
  ReturnType<typeof createExpenseFormSchema>
>;
export type ItemData = z.infer<typeof itemSchema>;

const itemSchema = z.object({
  date: z.date({ required_error: ERROR.date.required }),
  price: z
    .string() // priceは1,000のような3桁区切りの数字で管理
    .min(MIN_LETTER_LENGTH, ERROR.price.required)
    .refine((price) => formatCurrencyToNumber(price) > 0, {
      message: ERROR.price.min,
    }),
  payee: z.string(),
  breakdown: z.string().min(MIN_LETTER_LENGTH, ERROR.breakdown.required),
});

// 動的に申請タイトルのバリデーションルールを追加する関数
export const createExpenseFormSchema = (isRequiredName: boolean) => {
  return z.object({
    name: isRequiredName
      ? z.string().min(MIN_LETTER_LENGTH, ERROR.name.required)
      : z.string(),
    items: z.array(itemSchema),
  });
};

// 動的にスキーマに内訳のバリデーションルールを追加する関数
export const applyDynamicValidationRules = (
  schema: ReturnType<typeof createExpenseFormSchema>,
  rules: {
    price?: ValidationRule;
    payee?: ValidationRule;
    date?: ValidationRule;
    categoryName: string;
  }[]
) => {
  return schema.superRefine((formData, validationContext) => {
    formData.items.forEach((item, index) => {
      const rule = rules.find((rule) => rule.categoryName === item.breakdown);
      if (rule) {
        validatePrice({ item, rule, validationContext, index });
        validatePayee({ item, rule, validationContext, index });
      }
    });
  });
};
