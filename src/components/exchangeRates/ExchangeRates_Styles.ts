import styled from "styled-components";


const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBg};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 24px; 
  overflow: hidden; 
`;


const Title = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBgSecondary};
  padding: 14px 20px;
  font-size: 18px;
  font-weight: 600;
`;


const Table = styled.table`
  width: 100%;
  border-collapse: collapse; 
`;


const TableHead = styled.thead`
  background-color: ${({ theme }) => theme.colors.cardBgSecondary};
`;


const TableRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: none; 
  }
`;


const TableCell = styled.td`
  padding: 14px 20px;
  font-size: 15px;
`;


const TableHeadCell = styled.th`
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 600;
  text-align: left;
  color: ${({ theme }) => theme.colors.textSecondary};
`;


const RateValue = styled.td`
  padding: 14px 20px;
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
  text-align: right;
`;

export const S = {
  Wrapper,
  Title,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableHeadCell,
  RateValue,
};