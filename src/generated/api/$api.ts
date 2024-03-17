import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_19fedv9 } from './expense-categories';
import type { Methods as Methods_1iitgr } from './form-settings/_companyId@string';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:8080' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/expense-categories';
  const PATH1 = '/api/form-settings';
  const GET = 'GET';

  return {
    expense_categories: {
      /**
       * 内訳一覧取得 API
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_19fedv9['get']['resBody'], BasicHeaders, Methods_19fedv9['get']['status']>(prefix, PATH0, GET, option).json(),
      /**
       * 内訳一覧取得 API
       * @returns OK
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_19fedv9['get']['resBody'], BasicHeaders, Methods_19fedv9['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
    form_settings: {
      _companyId: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`;

        return {
          /**
           * フォーム設定取得 API
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1iitgr['get']['resBody'], BasicHeaders, Methods_1iitgr['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * フォーム設定取得 API
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1iitgr['get']['resBody'], BasicHeaders, Methods_1iitgr['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
