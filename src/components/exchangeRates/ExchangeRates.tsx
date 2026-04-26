type ExchangeRatesPropsType = {
  rates: { [key: string]: number }; 
  baseCurrency: string;            
}


const POPULAR_CURRENCIES = ["USD", "EUR", "GBP", "BYN", "RUB", "PLN", "UAH"];

export const ExchangeRates = ({ rates, baseCurrency }: ExchangeRatesPropsType) => {
 
  const popularRates = POPULAR_CURRENCIES.filter(
    currency => currency !== baseCurrency 
  );

  return (
    <div>
      <h2>Курсы валют</h2>
      <table>
        <thead>
          <tr>
            <th>Валюта</th>
            <th>Стоимость за 1 {baseCurrency}</th>
          </tr>
        </thead>
        <tbody>
          {popularRates.map(currency => (
            <tr key={currency}>
              <td>{currency}</td>
              <td>{rates[currency]?.toFixed(4)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};