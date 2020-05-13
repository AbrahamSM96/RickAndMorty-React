import React from 'react';

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
} from './styles';

const SIZE = '26PX';

const Cards = ({ name, image, status, species, gender, location }) => (
  <Col md="3">
    <Cardd>
      <CardBody>
        <CardTitlee>{name}</CardTitlee>
      </CardBody>
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
        <CardTextt>Location: {location.name}</CardTextt>
      </CardBody>
    </Cardd>
  </Col>
);

export default Cards;
