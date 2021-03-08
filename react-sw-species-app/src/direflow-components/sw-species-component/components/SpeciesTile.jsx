import React, { memo } from 'react';
import { shape, string } from 'prop-types';
import { Styled } from 'direflow-component';
import styles from './SpeciesTile.scss';

const SpeciesTile = ({ species }) => (
  <Styled styles={styles} scoped>
    <li>
      <span>{species.name}</span>
      <a className="btn btn-primary">Voir</a>
    </li>
  </Styled>
);

SpeciesTile.propTypes = {
  species: shape({
    name: string.isRequired
  }).isRequired
}

export default memo(SpeciesTile)