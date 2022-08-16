import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Filter extends Component {
  render() {
    const { searchName, cardRare, onInputChange } = this.props;

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
        <label htmlFor="input-optionFilter">
          Rarity
          <select
            id="input-optionFilter"
            name="rareSearch"
            data-testid="rare-filter"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>todas</option>
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  searchName: Proptypes.string.isRequired,
  cardRare: Proptypes.string.isRequired,
  onInputChange: Proptypes.func.isRequired,
};

export default Filter;
