import React, { memo } from 'react';
import { func, string } from 'prop-types';
import { Styled } from 'direflow-component';
import styles from './SpeciesSearch.scss';

const SpeciesSearch = ({ search, onSearchChange, onSubmit, onClear }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit();
  }
  return (
    <Styled styles={styles} scoped>
      <form className="sw-search" onSubmit={handleSubmit} onReset={onClear}>
        <input
          type="text"
          name="searchField"
          value={search}
          onChange={onSearchChange}
        />
        {
          search !== '' && (
            <button type="reset" className="btn-clear">
              Clear
            </button>
          )
        }
        <button type="submit">
          Search
        </button>
      </form>
    </Styled>
  )
}

SpeciesSearch.propTypes = {
  search: string.isRequired,
  onSearchChange: func.isRequired,
  onSubmit: func.isRequired,
  onClear: func.isRequired
}

export default memo(SpeciesSearch)