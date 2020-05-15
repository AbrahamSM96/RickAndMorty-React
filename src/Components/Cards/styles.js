import styled from 'styled-components';
import { Card, CardTitle, CardText } from 'reactstrap';
import { IoIosCheckmarkCircle, IoIosCloseCircle, IoMdAlert } from 'react-icons/io';
import { Link } from 'react-router-dom';

export const Cardd = styled(Card)`
  margin: 10px 0px;
  background: radial-gradient(circle, rgba(39, 175, 197, 1) 25%, rgba(151, 207, 107, 1) 80%);
  border-radius: 20px;
  /* background-color: #87b366; */
  font-family: 'Montserrat', sans-serif;
  &:hover {
    border: 3px solid rgba(39, 175, 197, 1);
    color: #ffffff !important;
  }
`;
export const CardTitlee = styled(CardTitle)`
  font-family: 'shlop_rg';
  font-size: 2em;
  text-align: center;
  color: rgba(39, 175, 197, 1);
  /* -webkit-text-stroke: 2px rgba(151, 207, 107, 1); */
`;

export const CardTextt = styled(CardText)`
  margin-bottom: 2px;
`;

export const DivGreen = styled.div`
  border: 0px;
  margin-right: 10px;
`;
export const DivRed = styled.div`
  border: 0px;
  margin-right: 10px;
`;
export const DivYellow = styled.div`
  border: 0px;
  margin-right: 10px;
`;

export const ContainerStatus = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Img = styled.img`
  border-radius: 50%;
`;

export const IoIosCheckmarkCirclee = styled(IoIosCheckmarkCircle)`
  color: green;
`;

export const IoIosCloseCirclee = styled(IoIosCloseCircle)`
  color: red;
`;

export const IoMdAlertt = styled(IoMdAlert)`
  color: yellow;
`;

export const Figure = styled.figure`
  max-width: 200px;
  margin: 0 auto;
`;

export const Linkk = styled(Link)`
  text-decoration: none !important;
  &:hover {
    color: #ffffff !important;
  }
`;
