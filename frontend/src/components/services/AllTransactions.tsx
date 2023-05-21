import api from '../../api';
import { AccountingDataType } from '../organisms/AccountingTable';

export const getAllTransactionsData = async (company: string | undefined) => {
  const transactions = await api.get(`transactions`)
  const transactionsData = transactions.data
  if(company !== undefined) {
    const filteredTransactionsData = transactionsData.filter((data: AccountingDataType) => data.type.company === company);
    return filteredTransactionsData
  }
  
  return transactions.data
};