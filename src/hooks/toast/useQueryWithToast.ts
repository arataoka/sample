/* eslint-disable @typescript-eslint/naming-convention */
import { useQuery } from "react-query";
import { useToast } from "@chakra-ui/react";
import { Error } from "../../generated/@types";
import { DEFAULT_ERROR_TOAST_OPTION } from "./constants";

export const useQueryWithToast = <T>(
  queryKey: string,
  apiFunction: () => Promise<T>
) => {
  const toast = useToast();
  return useQuery(queryKey, apiFunction, {
    suspense: true,
    onError: (error: unknown) => {
      const apiError = error as { response?: { data?: Error } };

      const errorMessage =
        apiError.response?.data?.message ||
        "データ取得に失敗しました。しばらくしてからお試しください。";

      toast({
        ...DEFAULT_ERROR_TOAST_OPTION,
        description: errorMessage,
      });
    },
  });
};
