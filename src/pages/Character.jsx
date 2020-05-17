import React from 'react';
import CardWithQuery from '../Components/CardWithQuery';

export const Character = (props) => {
  const { id } = props.match.params;

  return <CardWithQuery id={id} />;
};
