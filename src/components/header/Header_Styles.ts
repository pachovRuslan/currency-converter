import styled from "styled-components";


const Header = styled.header`
  margin-bottom: 24px;
`;


const MainHeaderBlock = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  gap: 100px;
  padding: 16px 24px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.cardBgSecondary}; 
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const TimeText = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;


const ThemeSwitchButton = styled.button`
  background: ${({ theme }) => theme.colors.cardBg};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: white;
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;


export const AppWrapper = styled.div`
  min-height: 100vh;
  max-width: 900px;  
  margin: 0 auto;
  padding: 24px 20px;
`;

export const S = {
  Header,
  MainHeaderBlock,
  TimeText,
  ThemeSwitchButton,
  AppWrapper,
};