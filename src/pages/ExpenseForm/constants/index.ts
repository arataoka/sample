export const DEFAULT_VALIDATION_ERROR_MESSAGES = {
  name: {
    required: "申請名を入力してください",
  },
  date: {
    required: "日付は必須項目です",
  },
  breakdown: {
    required: "内訳を選択してください",
  },
  price: {
    required: "金額は必須項目です",
    min: "1以上で設定してください",
    type: "数字を入力してください",
  },
  payee: {},
} as const;

export const DEFAULT_FORM_VALUE = {
  name: "",
  items: [{}],
};

export const MAX_ITEM_COUNT = 10;
export const MIN_ITEM_COUNT = 1;
export const MAX_ITEMS_ERROR_MESSAGE = `一度に申請できるのは${MAX_ITEM_COUNT}個までです`;
