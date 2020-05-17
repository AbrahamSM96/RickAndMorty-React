import React from 'react';
import { ContainerPagination, LinkPagination, PageNumber } from './styles';
export const Paginate = ({ pageParams }) => {
  const page = Number(pageParams || 1);

  const getClickablePages = (actualPage) => {
    // var offsets = [];
    // for (let i = 0; i <= pag; i++) {
    //   var element = i;
    //   offsets.push(element);
    // }
    let offsets = [0];

    return offsets.map((number) => parseInt(actualPage, 10) + number);
  };

  const getPage = (direction, actualPage) => {
    const nextPage = parseInt(actualPage, 10) + direction;
    return nextPage >= 0 ? nextPage : 1;
  };

  const clickablePages = getClickablePages(Number(pageParams) || 1);

  return (
    <ContainerPagination>
      <LinkPagination to={`/${getPage(-1, page)}`}>Prev</LinkPagination>
      {clickablePages.map((pageNumber) => (
        <LinkPagination to={`/${pageNumber}`} key={pageNumber}>
          <PageNumber actualPage={pageNumber === page}>{pageNumber}</PageNumber>
        </LinkPagination>
      ))}
      <LinkPagination to={`/${getPage(1, page)}`}>Next</LinkPagination>
    </ContainerPagination>
  );
};
