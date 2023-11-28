import styled from 'styled-components';
export const Container = styled.div`
  width: 300px;
  display: block;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  border-radius: 10px 10px 0px 0px;
  background-color: #fff;
`;
export const StatsList = styled.ul`
  display: flex;
  justify-content: space-around;
  background-color: #dadbd7;
`;
export const StatsItem = styled.li`
  padding: 15px;
  display: flex;
  flex-direction: column;
  margin: 0;
  border: 1px solid gray;
  flex-basis: calc((100%) / 3);
`;
export const StatsQuantity = styled.span`
  font-weight: 700;
`;
export const UserAvatarThumb = styled.div`
  width: 150px;
  height: 150px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 50%;
`;
export const FontName = styled.p`
  color: black;
  font-size: 22px;
  font-weight: 600;
`;
export const FontTag = styled.p`
  color: gray;
  font-size: 18;
`;
