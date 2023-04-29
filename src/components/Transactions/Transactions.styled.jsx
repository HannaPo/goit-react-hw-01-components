import styled from '@emotion/styled';

export const Transactions = styled.table`
  margin: 20px;
  width: 500px;
  border-collapse: collapse;
  table-layout: fixed;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 1px rgba(0,0,0,.14), 0 2px 1px rgba(0,0,0,.2);
`;

export const TableHead = styled.thead`
  text-transform: uppercase;
  color: #e4e9f0;
  background-color: #4d5264;
`;

export const TableHeader = styled.th`
  width: 100%;
  padding: 10px;
  text-align: center;
`;

export const TableBody = styled.tbody`
  padding: 10px;
`;

export const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f3f3f5;
  }
`;

export const TableData = styled.td`
  width: 200px;
  padding: 10px;
  text-align: center;
`;
