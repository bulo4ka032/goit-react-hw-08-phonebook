import styled from '@emotion/styled';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: space-between;
  max-height: 80px;
  margin: 0;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 18px;
  padding-bottom: 18px;
  color: #50505d;
  background: #eef1ffd2;
  /* background: linear-gradient(
    90deg,
    rgba(116, 141, 166, 1) 0%,
    rgba(156, 180, 204, 1) 25%,
    rgba(211, 206, 223, 1) 60%,
    rgba(242, 215, 217, 1) 99%
  ); */
  box-shadow: 0px 4px 1px -4px rgba(0, 0, 0, 0.2),
    0px 4px 3px -3px rgba(0, 0, 0, 0.14), 0px 4px 4px -4px rgba(0, 0, 0, 0.12);
`;
