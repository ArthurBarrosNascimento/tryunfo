import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Filter extends Component {
  render() {
    const { searchName, cardRare, cardTrunfo, able, onInputChange } = this.props;

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
            disabled={ able }
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
            disabled={ able }
          >
            <option>todas</option>
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="input-checkedTrunfo">
          <input
            id="input-checkedTrunfo"
            name="checkedSearch"
            type="checkbox"
            data-testid="trunfo-filter"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
          Super Trybe Trunfo
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  searchName: Proptypes.string.isRequired,
  cardRare: Proptypes.string.isRequired,
  cardTrunfo: Proptypes.bool.isRequired,
  able: Proptypes.bool.isRequired,
  onInputChange: Proptypes.func.isRequired,
};

export default Filter;
