import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label``;

export const Title = styled.p`
  font-weight: 200;
  font-size: 24px;
`;

export const Input = styled.input`
  padding: 6px 12px;
  width: 400px;
  font-size: 18px;
`;

export const Submit = styled.button`
  display: block;
  margin-top: 32px;
  width: 200px;
  padding: 6px 12px;
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

export const ButtonText = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

export const Container = styled.div`
  display: flex;
  padding: 64px 32px;
  justify-content: space-around;
  align-items: center;
`;

export const Image = styled.img``;
