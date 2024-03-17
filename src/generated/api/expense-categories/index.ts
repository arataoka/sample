/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 内訳一覧取得 API */
  get: {
    status: 200

    /** OK */
    resBody: {
      categories: Types.Category[]
    }
  }
}
