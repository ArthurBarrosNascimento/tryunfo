import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Filter extends Component {
  render() {
    const { searchName, onInputChange } = this.props;

    return (
      <div>
        <label htmlFor="input-searchName">
          Busque uma Carta Salva
          <br />
          <input
            type="text"
            id="input-searchName"
            data-testid="name-filter"
            name="nameSearch"
            placeholder="Digite um Nome"
            value={ searchName }
            onChange={ onInputChange }
          />
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  searchName: Proptypes.string.isRequired,
  onInputChange: Proptypes.func.isRequired,
};

export default Filter;
