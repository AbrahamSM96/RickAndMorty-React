import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoContainer = styled.div`
  margin: 0 auto;
  width: 500px;
  height: 150px;
  margin-top: 20px;
  @media (max-width: 425px) {
    width: 280px;
  }
`;

export const Linkk = styled(Link)`
  width: 0;
  height: 0;
`;
