import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name-card">
          Name
          <input
            id="name-card"
            type="text"
            placeholder="Name of Card"
            data-testid="name-input"
          />
        </label>

        <label htmlFor="description-card">
          Description
          <textarea
            id="description-card"
            type="text"
            data-testid="description-input"
          />
        </label>

        <label htmlFor="attr1-card">
          Attr01
          <input
            id="attr1-card"
            type="text"
            data-testid="attr1-input"
          />
        </label>

        <label htmlFor="attr2-card">
          Attr02
          <input
            id="attr2-card"
            type="text"
            data-testid="attr2-input"
          />
        </label>

        <label htmlFor="attr3-card">
          Attr03
          <input
            id="attr3-card"
            type="text"
            data-testid="attr3-input"
          />
        </label>

        <label htmlFor="image-card">
          Image
          <input
            id="image-card"
            type="text"
            data-testid="image-input"
          />
        </label>

        <label htmlFor="select-rare-card">
          Rarity
          <select
            id="select-rare-card"
            data-testid="rare-input"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <label htmlFor="checkbox-card">
          <input
            id="checkbox-card"
            type="checkbox"
            data-testid="trunfo-input"
          />
          Super Trybe Trunfo
        </label>

        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
