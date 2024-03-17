import { useFetchExpenseCategories } from "../../../hooks/api/useFetchExpenseCategories";
import { extractValidationRules } from "../utils/validation";
import {
  applyDynamicValidationRules,
  createExpenseFormSchema,
} from "../scheme";
import { useFetchFormSettings } from "../../../hooks/api/useFetchFormSettings";

const DUMMY_COMPANY_ID = "1";

export const useExpenseForm = () => {
  const { data } = useFetchExpenseCategories();
  const { data: formSettingData } = useFetchFormSettings(DUMMY_COMPANY_ID);

  // 内訳ルール抽出
  const validationRules = data?.categories
    ? extractValidationRules(data.categories)
    : [];
  // 申請タイトルが必須かどうか
  const isRequiredTitle = Boolean(formSettingData?.isRequiredTitle);
  const expenseFormSchema = createExpenseFormSchema(isRequiredTitle);
  // APIレスポンス値から動的なバリデーションスキーマを作成
  const validatedExpenseFormSchema = applyDynamicValidationRules(
    expenseFormSchema,
    validationRules
  );

  return {
    validatedExpenseFormSchema,
  };
};
