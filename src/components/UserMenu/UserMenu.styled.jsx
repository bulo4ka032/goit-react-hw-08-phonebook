import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  margin-right: 24px;
`;

export const Text = styled.p`
  font-size: 20px;
  margin: 0;
  color: #50505d;
`;

export const Button = styled.button`
  /* max-height: 40px; */
  color: #50505d;
  background-color: white;
  border: none;
  border-radius: 15px;
  font-size: 16px;
  padding: 4px 12px;
  transition: box-shadow 250ms ease-out;
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.14);
  }
`;
