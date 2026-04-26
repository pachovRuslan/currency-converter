import type { CurrencyType } from "../types/currency.types";



const API_KEY = import.meta.env.VITE_CURRENCY_API_KEY;
console.log("API KEY:", API_KEY); 
const BASE_URL = "https://v6.exchangerate-api.com/v6/";

export const currencyApi = {
  getCurrency: async (baseCurrency: string): Promise<CurrencyType> => {
    const response = await fetch(
      `${BASE_URL}${API_KEY}/latest/${baseCurrency}`
    );
    if (!response.ok) {
      throw new Error("данные не найдены");
    }
    return response.json();
  },


};