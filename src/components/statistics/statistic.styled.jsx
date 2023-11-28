import styled from 'styled-components';

export const StatsListWrap = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const StatsListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border: 1px solid black;
`;
export const StatsContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 30px auto 0;
  background-color: #fff;
`;
