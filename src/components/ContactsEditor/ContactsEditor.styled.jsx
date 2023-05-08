import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  /* flex-direction: column; */
  align-items: flex-end;
  gap: 20px;
`;

export const Label = styled.label``;

export const Title = styled.p`
  font-weight: 200;
  font-size: 18px;
`;

export const Input = styled.input`
  padding: 2px 8px;
  width: 300px;
  font-size: 18px;
  font-weight: 200;
`;

export const Submit = styled.button`
  display: block;
  margin-top: 16px;
  height: 30px;
  width: 120px;
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
  padding: 16px 32px;
  /* justify-content: space-around; */
  align-items: center;
  /* position: relative; */
`;

export const Image = styled.img`
  position: absolute;
  right: 100px;
  top: 100px;
`;
