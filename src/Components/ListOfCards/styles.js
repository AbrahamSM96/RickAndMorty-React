import styled, { keyframes } from 'styled-components';
import { Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100%;
`;

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
`;

export const ContainerOutInput = styled.div`
  display: flex;
  justify-content: center;
`;

export const Buttonn = styled(Button)`
  border: 1px solid #47ccde;
  border-radius: 20px;
  color: #47ccde;
  &:hover {
    background-color: rgba(39, 175, 197, 1);
    color: #ffffff;
  }
`;

export const PageNumber = styled.li`
  color: ${({ actualPage }) => (actualPage ? 'rgba(151, 207, 107)' : '#ffffff')};
  margin: 0 10px;
`;

export const ContainerPagination = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0px;
  padding: 0px;
`;

export const LinkPagination = styled(Link)`
  color: #21d8ff;
  margin: 0 10px;
  border: 2px solid #ffffff;
  font-weight: bold;
  padding: 5px;
  border-radius: 20px;
  list-style: none;
  &:hover {
    background-color: rgba(39, 175, 197, 1);
    color: #ffffff;
    text-decoration: none;
  }
`;
