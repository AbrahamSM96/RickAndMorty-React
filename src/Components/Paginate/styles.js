import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
