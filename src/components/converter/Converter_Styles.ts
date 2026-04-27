import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBg};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 24px; 
  overflow: hidden; 

`;
const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const Row = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const Title = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBgSecondary};
  padding: 14px 20px;
  font-size: 18px;
  font-weight: 600;
`;
const Input = styled.input`
  flex: 1; 
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.cardBgSecondary};
  padding: 14px 20px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  outline: none;
`;
const Select = styled.select`border-radius: 12px;
 padding: 12px 20px;
 background-color: ${({ theme }) => theme.colors.cardBgSecondary};
  font-size: 14px;
  font-weight: 600;
  text-align: left;
  color: ${({ theme }) => theme.colors.textSecondary};

`;

export const S = {
    Wrapper,
    Title,
    Input,
    Select,
    Row,
    Content

}