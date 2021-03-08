import React, { useCallback, useEffect, useState } from 'react';
import { Styled } from 'direflow-component';
import styles from './App.scss';
import SpeciesSearch from './components/SpeciesSearch';
import SpeciesTile from './components/SpeciesTile';
import Pagination from './components/Pagination';
import { getSpecies, searchSpecies } from './services/api.service';

const App = () => {
  const [species, setSpecies] = useState([]);
  const [paginationData, setPaginationData] = useState({ currentPage: 1, pageNumber: 1 });
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchCharacters()
  }, [])

  const fetchCharacters = async (page = 1) => {
    const response = await getSpecies(page);
    const data = await response.json();
    setSpecies(data.results);
    setPaginationData({ currentPage: page, pageNumber: data.total_pages })
  }

  const fetchSearch = async (search, page = 1) => {
    const response = await searchSpecies(search, page);
    const data = await response.json();
    setSpecies(data.results);
    setPaginationData({ currentPage: page, pageNumber: data.total_pages });
  }

  const onSearchChange = useCallback(event => {
    setSearch(event.currentTarget.value);
  }, [])

  const onSearchClear = useCallback(() => {
    setSearch('');
    fetchCharacters();
  }, []);

  const onChangePage = useCallback(async (event) => {
    setPaginationData(state => ({ ...state, currentPage: event }))
    console.warn(event)
    if (!search) {
      fetchCharacters(event);
    } else {
      fetchSearch(search, event);
    }
  }, [search]);

  const onSearchSubmit = useCallback(async () => {
    if (search !== '') {
      fetchSearch(search);
    } else {
      fetchCharacters();
    }
  }, [search]);

  return (
    <Styled styles={styles} scoped>
      <div>
        <h2>Liste des espèces</h2>
        <div className="sw-bloc">
          <SpeciesSearch search={search} onSearchChange={onSearchChange} onSubmit={onSearchSubmit} onClear={onSearchClear} />
          <div className="sw-list">
            <ul className="list">
              {
                species.map(t => (
                  <SpeciesTile key={t.id} species={t} />
                ))
              }
            </ul>
          </div>
          {
            paginationData.pageNumber > 1 &&
            <Pagination onChangePage={onChangePage} {...paginationData} />
          }
        </div>
      </div>
    </Styled>
  )
};

export default App;