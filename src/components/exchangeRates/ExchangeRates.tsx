import { S } from "./ExchangeRates_Styles";

type ExchangeRatesPropsType = {
  rates: { [key: string]: number };
  baseCurrency: string;
};

const POPULAR_CURRENCIES = ["USD", "EUR", "GBP", "BYN", "RUB", "PLN", "UAH"];

export const ExchangeRates = ({
  rates,
  baseCurrency,
}: ExchangeRatesPropsType) => {
  const popularRates = POPULAR_CURRENCIES.filter(
    (currency) => currency !== baseCurrency,
  );

  return (
    <S.Wrapper>
      <S.Title>Курсы валют</S.Title>
      <S.Table>
        <S.TableHead>
          <S.TableRow>
            <S.TableHeadCell>Валюта</S.TableHeadCell>
            <S.TableHeadCell>Стоимость за 1 {baseCurrency}</S.TableHeadCell>
          </S.TableRow>
        </S.TableHead>
        <tbody>
          {popularRates.map((currency) => (
            <S.TableRow key={currency}>
              <S.TableCell>{currency}</S.TableCell>
              <S.RateValue>{rates[currency]?.toFixed(4)}</S.RateValue>
            </S.TableRow>
          ))}
        </tbody>
      </S.Table>
    </S.Wrapper>
  );
};
