import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_1wi1fvw } from './_companyId@string';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:8080' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/form-settings';
  const GET = 'GET';

  return {
    _companyId: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * フォーム設定取得 API
         * @returns OK
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_1wi1fvw['get']['resBody'], BasicHeaders, Methods_1wi1fvw['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * フォーム設定取得 API
         * @returns OK
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_1wi1fvw['get']['resBody'], BasicHeaders, Methods_1wi1fvw['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`,
      };
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
