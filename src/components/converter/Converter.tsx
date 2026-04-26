import { useState } from "react";

type ConverterPropsType = {
  rates: { [key: string]: number };
}

const CURRENCIES = ["USD", "EUR", "GBP", "BYN", "RUB", "PLN", "UAH"];

export const Converter = ({ rates }: ConverterPropsType) => {
  const [fromCurrency, setFromCurrency] = useState("USD"); 
  const [toCurrency, setToCurrency] = useState("BYN");    
  const [amount, setAmount] = useState(1);                  
  
  
  const result = ((amount / rates[fromCurrency]) * rates[toCurrency]).toFixed(2);

  return (
    <div>
      <h2>Конвертер валют</h2>
      
      {/* блок ввода */}
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <select 
          value={fromCurrency} 
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {CURRENCIES.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      {/* результат — только читаем, не редактируем */}
      <div>
        <input type="number" value={result} readOnly />
        <select 
          value={toCurrency} 
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {CURRENCIES.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
    </div>
  );
};