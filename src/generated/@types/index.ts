/* eslint-disable */
export type Category = {
  id: number
  name: string

  rules: {
    price?: ValidationRule | undefined
    payee?: ValidationRule | undefined
    date?: ValidationRule | undefined
  }
}

export type ValidationRule = {
  isRequired?: boolean | undefined
  minAmount?: number | undefined
  maxAmount?: number | undefined
}

export type Error = {
  message: string
}
