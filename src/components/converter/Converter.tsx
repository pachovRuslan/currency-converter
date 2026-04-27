import { useState } from "react";
import { S } from "./Converter_Styles";

type ConverterPropsType = {
  rates: { [key: string]: number };
};

const CURRENCIES = ["USD", "EUR", "GBP", "BYN", "RUB", "PLN", "UAH"];

export const Converter = ({ rates }: ConverterPropsType) => {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("BYN");
  const [amount, setAmount] = useState(1);

  const result = ((amount / rates[fromCurrency]) * rates[toCurrency]).toFixed(
    2,
  );

  return (
    <S.Wrapper>
      <S.Title>Конвертер валют</S.Title>
      <S.Content>
        <S.Row>
          <S.Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <S.Select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            {CURRENCIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </S.Select>
        </S.Row>

        <S.Row>
          <S.Input type="number" value={result} readOnly />
          <S.Select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            {CURRENCIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </S.Select>
        </S.Row>
      </S.Content>
    </S.Wrapper>
  );
};
