import styled from 'styled-components';
import { Input } from 'reactstrap';

export const Inputt = styled(Input)`
  border-radius: 20px;
  max-width: 250px;
  border: none;
  padding: 0px;
  outline: none;
  &:focus {
    outline: none;
  }
  &[type='text'] {
    outline: none;
    padding-left: 10px;
    color: #000000;
    font-weight: 800;
  }
  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;

export const ContainerInput = styled.div`
  max-width: 300px;
  border-radius: 100px;
  border: 1px solid transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

export const SpanIcon = styled.span`
  width: 20px;
  height: 20px;
  margin-bottom: 5px;
  margin-right: 5px;
  margin-left: 5px;
`;

export const ImgIcon = styled.img`
  width: 20px;
  height: 20px;
  color: #ffffff;
  margin-left: 5px;
`;
