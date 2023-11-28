import styled from 'styled-components';
export const IsOnlineEl = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: block;
`;
export const FriendsListWrap = styled.ul`
  display: flex;
  text-decoration: none;
  flex-direction: column;
  align-items: center;
  margin: 30px auto 0 auto;
  gap: 10px;
  border: 1px solid black;
  width: 400px;
  background-color: whitesmoke;
  padding: 20px;
  border-radius: 10px;
`;
export const FriendsListItem = styled.li`
  display: flex;
  align-items: center;
  width: 140px;
  border: 1px solid black;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
