export const DEFAULT_TOAST_OPTION = {
  duration: 5000,
  isClosable: true,
  position: "top-right",
} as const;

export const DEFAULT_SUCCESS_TOAST_OPTION = {
  title: "成功",
  description: "成功しました",
  status: "success",
  ...DEFAULT_TOAST_OPTION,
} as const;

export const DEFAULT_ERROR_TOAST_OPTION = {
  title: "エラー",
  status: "error",
  description: "データ取得に失敗しました。しばらくしてからお試しください。",
  ...DEFAULT_TOAST_OPTION,
} as const;
