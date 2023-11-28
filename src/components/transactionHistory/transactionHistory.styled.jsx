import styled from 'styled-components';
export const Table = styled.table`
  width: 600px;
  margin: 30px auto 30px auto;
  border-collapse: collapse;
`;
export const Th = styled.th`
  color: white;
  background-color: #04aba8;
  padding: 10px;
  border: 1px solid black;
`;

export const Td = styled.td`
  border: 1px solid black;
  padding: 8px;
  text-align: center;
`;
export const Tr = styled.tr`
  &:nth-child(odd) {
    background-color: #f2f2f2;
  }
  &:nth-child(even) {
    background-color: #ffffff;
  }
`;
