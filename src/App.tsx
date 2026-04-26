import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/Theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import { currencyApi } from "./api/currencyApi";
import type { CurrencyType } from "./types/currency.types";
import { Header } from "./components/header/Header";
import { ExchangeRates } from "./components/exchangeRates/ExchangeRates";
import { Converter } from "./components/converter/Converter";

function App() {
   const [isDark, setIsDark] = useState(true);
 const [currencyName, setCurrencyName] = useState("usd");
 const [currencyData, setCurrencyData] =
    useState<CurrencyType | null>(null);
   const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
 const fetchCurrency = async (currencyName: string) => {
    try {
      setLoading(true);
      setError(null);
   const data = await currencyApi.getCurrency(currencyName);
setCurrencyData(data);
      
      
    } catch (err) {
      setError("данные не найдены.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCurrency(currencyName);
  }, []);
 return (
  <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
    <GlobalStyles />
  <div>

  {loading && <p>Загрузка...</p>}
  {error && <p>{error}</p>}
  {currencyData && <p>{currencyData.base_code}</p>}
</div>
<Header/>
{currencyData && (
  <ExchangeRates 
    rates={currencyData.conversion_rates} 
    baseCurrency={currencyData.base_code} 
  />
)}
<Converter  rates={currencyData.conversion_rates}  />
  </ThemeProvider>
);
}

export default App;
