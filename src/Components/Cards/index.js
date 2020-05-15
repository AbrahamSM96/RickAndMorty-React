import React from 'react';
import { Link } from 'react-router-dom';
import { CardText, Col, CardBody } from 'reactstrap';
import {
  Cardd,
  DivGreen,
  DivRed,
  DivYellow,
  ContainerStatus,
  CardTitlee,
  Img,
  IoIosCheckmarkCirclee,
  IoIosCloseCirclee,
  IoMdAlertt,
  CardTextt,
  Figure,
  Linkk,
} from './styles';

const SIZE = '26PX';

const Cards = ({ id, name, image, status, species, gender }) => (
  <Col md="3">
    <Cardd>
      <CardBody>
        <CardTitlee>{name}</CardTitlee>
      </CardBody>
      <Linkk to={`/character/${id}`}>
        <Figure>
          <Img width="100%" src={image} alt={name} />
        </Figure>
        <CardBody>
          {status === 'Alive' && (
            <ContainerStatus>
              <DivGreen>
                <IoIosCheckmarkCirclee size={SIZE} />
              </DivGreen>
              <CardText>{status}</CardText>
            </ContainerStatus>
          )}
          {status === 'Dead' && (
            <ContainerStatus>
              <DivRed>
                <IoIosCloseCirclee size={SIZE} />
              </DivRed>
              <CardText>{status}</CardText>
            </ContainerStatus>
          )}
          {status === 'unknown' && (
            <ContainerStatus>
              <DivYellow>
                <IoMdAlertt size={SIZE} />
              </DivYellow>
              <CardText>{status}</CardText>
            </ContainerStatus>
          )}

          <CardTextt>Specie: {species}</CardTextt>
          <CardTextt>Gender :{gender}</CardTextt>
        </CardBody>
      </Linkk>
    </Cardd>
  </Col>
);

export default Cards;
