import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_33cnq0 } from './api/expense-categories';
import type { Methods as Methods_5prvno } from './api/form-settings/_companyId@string';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:8080' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/expense-categories';
  const PATH1 = '/api/form-settings';
  const GET = 'GET';

  return {
    api: {
      expense_categories: {
        /**
         * 内訳一覧取得 API
         * @returns OK
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_33cnq0['get']['resBody'], BasicHeaders, Methods_33cnq0['get']['status']>(prefix, PATH0, GET, option).json(),
        /**
         * 内訳一覧取得 API
         * @returns OK
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_33cnq0['get']['resBody'], BasicHeaders, Methods_33cnq0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH0}`,
      },
      form_settings: {
        _companyId: (val2: string) => {
          const prefix2 = `${PATH1}/${val2}`;

          return {
            /**
             * フォーム設定取得 API
             * @returns OK
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_5prvno['get']['resBody'], BasicHeaders, Methods_5prvno['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * フォーム設定取得 API
             * @returns OK
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_5prvno['get']['resBody'], BasicHeaders, Methods_5prvno['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
      },
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
