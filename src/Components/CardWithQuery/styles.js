import styled from 'styled-components';
import { Row, Container, Col, Button } from 'reactstrap';

export const P = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Roww = styled(Row)`
  margin: 0 auto;
  border: 10px solid #47ccde;
  border-radius: 10px;
`;

export const Containerr = styled(Container)`
  text-align: center;
  margin-top: 80px;
`;

export const Img = styled.img`
  border-radius: 300px;
  border: 5px solid rgba(151, 207, 107, 1);
`;

export const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 500px;
  height: 150px;
  margin-top: 20px;
`;

export const Coll = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle, rgba(39, 175, 197, 1) 25%, rgba(151, 207, 107, 1) 80%);
`;

export const H1 = styled.h1`
  font-family: 'shlop_rg';
  font-size: 4em;
`;

export const ContainerButton = styled.div`
  margin-top: 20px;
  padding-left: 15px;
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

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100%;
`;
