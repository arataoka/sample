import { apiClient } from "../../api/utils/apiClient";
import { useQueryWithToast } from "../toast/useQueryWithToast";

export const useFetchExpenseCategories = () => {
  return useQueryWithToast("expenseCategories", () =>
    apiClient.api.expense_categories.$get()
  );
};
