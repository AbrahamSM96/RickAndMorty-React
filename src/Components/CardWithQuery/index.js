import React from 'react';
import Loader from 'react-loaders';
import {
  H1,
  Roww,
  Containerr,
  Img,
  ContainerLogo,
  Coll,
  ContainerButton,
  Buttonn,
  LoaderContainer,
  IoIosCheckmarkCirclee,
  IoIosCloseCirclee,
  IoMdAlertt,
  ContainerStatus,
  DivGreen,
  DivRed,
  DivYellow,
  RowButton,
} from './styles';
import { withRouter } from 'react-router';
import { useSingleCharacter } from '../../hooks/useSingleCharacter';

import { Logo } from '../Logo';
const SIZE = '26PX';

const CardWithQuery = (props) => {
  const { id } = props;

  const { singleCharacter, loading, error } = useSingleCharacter(id);

  if (error) {
    return `Error: ${error.message}`;
  } else {
    return (
      <>
        <Logo />
        <Containerr>
          <Roww md="2">
            <Coll>
              <figure>
                <Img src={singleCharacter.data.image} alt={singleCharacter.data.name} />
              </figure>
            </Coll>
            <Coll>
              <H1>{singleCharacter.data.name}</H1>
              {singleCharacter.data.status === 'Alive' && (
                <ContainerStatus>
                  <DivGreen>
                    <IoIosCheckmarkCirclee size={SIZE} />
                  </DivGreen>
                  <h3>{singleCharacter.data.status}</h3>
                </ContainerStatus>
              )}
              {singleCharacter.data.status === 'Dead' && (
                <ContainerStatus>
                  <DivRed>
                    <IoIosCloseCirclee size={SIZE} />
                  </DivRed>
                  <h3>{singleCharacter.data.status}</h3>
                </ContainerStatus>
              )}
              {singleCharacter.data.status === 'unknown' && (
                <ContainerStatus>
                  <DivYellow>
                    <IoMdAlertt size={SIZE} />
                  </DivYellow>
                  <h3>{singleCharacter.data.status}</h3>
                </ContainerStatus>
              )}
              <h3>{singleCharacter.data.species}</h3>
              <h3>{singleCharacter.data.gender}</h3>
            </Coll>
          </Roww>
          <RowButton>
            <ContainerButton>
              <Buttonn className="justify-content-md-start" outline size="md" onClick={() => props.history.go(-1)}>
                Return
              </Buttonn>
            </ContainerButton>
          </RowButton>
        </Containerr>
        {loading && (
          <LoaderContainer>
            <Loader type="pacman" />
          </LoaderContainer>
        )}
      </>
    );
  }
};
export default withRouter(CardWithQuery);
