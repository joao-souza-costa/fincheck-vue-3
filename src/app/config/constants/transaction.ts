export enum TRANSACTION_TYPE {
  INCOME = 'INCOME',
  EXPENSE = 'EXPENSE',
}

export const TRANSACTION_LABELS: { [key in TRANSACTION_TYPE]: string } = {
  [TRANSACTION_TYPE.INCOME]: "Receita",
  [TRANSACTION_TYPE.EXPENSE]: "Despesa",
}