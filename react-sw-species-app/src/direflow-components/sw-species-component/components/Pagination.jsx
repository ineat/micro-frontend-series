import React, { memo } from 'react';
import { number, func } from 'prop-types';
import { Styled } from 'direflow-component';
import styles from './Pagination.scss';

const Pagination = ({ currentPage, pageNumber, onChangePage }) => {
  const pages = new Array(pageNumber).fill(0).map((_, index) => ({ id: index + 1, text: index + 1 }));
  const getClassName = (id) => id === currentPage ? 'current' : null

  return (
    <Styled styles={styles} scoped>
      <div className="pagination-wrapper">
        <ul>
          {
            pages.map(({ id, text }) => (
              <li className={getClassName(id)} key={id} onClick={() => onChangePage(id)}>
                <span>{text}</span>
              </li>))
          }
        </ul>
      </div>
    </Styled>
  )
}

Pagination.propTypes = {
  currentPage: number.isRequired,
  pageNumber: number.isRequired,
  onChangePage: func.isRequired
};

export default memo(Pagination);