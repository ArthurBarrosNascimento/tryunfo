/* eslint-disable jsx-a11y/label-has-associated-control */
import { React, Component } from 'react';
import PropTypes from 'prop-types';
// import './form.css';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfi,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <div id="campo-nome">
          <label htmlFor="nome">
            Nome da Carta
            <input
              type="text"
              placeholder="Nome"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div id="campo-descricao">
          <label htmlFor="descricao">
            Descrição
            <textarea
              cols="30"
              rows="5"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div id="div-attrs">
          <label htmlFor="atr01">
            Attr01
            <input
              type="text"
              data-testid="attr1-input"
              className="input-attrs"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr02">
            Attr02
            <input
              type="text"
              data-testid="attr2-input"
              className="input-attrs"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />

          </label>

          <label htmlFor="attr03">
            Attr03
            <input
              type="text"
              data-testid="attr3-input"
              className="input-attrs"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div id="div-img">
          <label htmlFor="img">
            Imagem
            <input
              type="text"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div id="div-options-rare">
          <label htmlFor="option">
            Raridade
            <select
              type="text"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
        </div>

        <div id="div-check">
          <label htmlFor="check">
            <input
              type="checkbox"
              data-testid="trunfo-input"
              value={ cardTrunfo }
              onChange={ onInputChange }
            />
            Super Trybe Trunfo
          </label>
        </div>

        <button
          type="button"
          data-testid="save-button"
          value={ isSaveButtonDisabled }
          onChange={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfi: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
