import { PaginationProps } from './Pagination.types';

export const Pagination = ({ currentPage, totalPages, onChangePage }: PaginationProps) => {
  const pageItems = [];

  for (let i = 0; i < totalPages; i++) {
    pageItems.push(i);
  }

  return (
    <>
      {pageItems.map((pageNumber) => (
        <span key={pageNumber}>{pageNumber + 1}</span>
      ))}
    </>
  );
};
