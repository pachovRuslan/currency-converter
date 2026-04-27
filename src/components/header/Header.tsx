import { useEffect, useState } from 'react';
import { S } from './Header_Styles';
type HeaderPropsType = {
  isDark: boolean;
  onThemeToggle: () => void;
}
export const Header = ({ isDark, onThemeToggle }: HeaderPropsType) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <S.Header>
      <S.MainHeaderBlock>
        <S.TimeText> {time.toLocaleString("ru-RU")}</S.TimeText>
        <S.ThemeSwitchButton onClick={onThemeToggle}>
          {isDark ? "☀️ Светлая" : "🌙 Тёмная"}
        </S.ThemeSwitchButton>
      </S.MainHeaderBlock>


    </S.Header>

  );
};
