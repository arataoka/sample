import { apiClient } from "../../api/utils/apiClient";
import { useQueryWithToast } from "../toast/useQueryWithToast";

export const useFetchFormSettings = (companyId: string) => {
  return useQueryWithToast(`formSetting/${companyId}`, () =>
    apiClient.api.form_settings._companyId(companyId).$get()
  );
};
