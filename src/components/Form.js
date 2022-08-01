/* eslint-disable jsx-a11y/label-has-associated-control */
import { React, Component } from 'react';
import './form.css';

class Form extends Component {
  render() {
    return (
      <form>
        <div id="campo-nome">
          <label htmlFor="nome">
            Nome da Carta
            <input type="text" id="nome" placeholder="Nome" data-testid="name-input" />
          </label>
        </div>

        <div id="campo-descricao">
          <label htmlFor="descricao">
            Descrição
            <textarea cols="30" rows="5" data-testid="description-input" />
          </label>
        </div>

        <div id="div-attrs">
          <label htmlFor="atr01">
            Attr01
            <input type="number" data-testid="attr1-input" className="input-attrs" />
          </label>

          <label htmlFor="attr02">
            Attr02
            <input type="number" data-testid="attr2-input" className="input-attrs" />

          </label>

          <label htmlFor="attr03">
            Attr03
            <input type="number" data-testid="attr3-input" className="input-attrs" />
          </label>
        </div>

        <div id="div-img">
          <label htmlFor="img">
            Imagem
            <input type="text" data-testid="image-input" />
          </label>
        </div>

        <div id="div-options-rare">
          <label htmlFor="option">
            Raridade
            <select data-testid="rare-input">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
        </div>

        <div id="div-check">
          <label htmlFor="check">
            <input type="checkbox" data-testid="trunfo-input" />
            Super Trybe Trunfo
          </label>
        </div>

        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
