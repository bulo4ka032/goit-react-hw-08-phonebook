import styled from '@emotion/styled';

export const Container = styled.div`
  box-shadow: 0px 2px 2px -1px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 2px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  padding: 4px 8px;
  justify-content: space-between;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 300;
`;

export const Number = styled.p`
  color: #7895b2;
  font-size: 18px;
  font-weight: 400;
`;

export const Delete = styled.button`
  background-color: #eef1ffd2;
  cursor: pointer;
  border: 1px solid grey;
  border-radius: 15px;
  outline: none;
  transition: box-shadow 250ms ease-out;
  &:hover,
  &:focus {
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.14);
  }
`;
