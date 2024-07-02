import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

export const FormTitle = styled.h2`
  color: #A03B3B;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  background: rgba(160, 58, 58, 0.17);
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #A03B3B;
  font-size: 18px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  background-color: #A03B3B;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #801f1f;
  }
`;
