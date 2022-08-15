import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.isSaveButtonDisabled = this.isSaveButtonDisabled.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.clearStatesInputs = this.clearStatesInputs.bind(this);
    this.hasTrunfo = this.hasTrunfo.bind(this);

    this.state = {
      name: '',
      description: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      image: '',
      rare: 'normal',
      trunfo: false,
    };
  }

  onInputChange({ target }) {
    const { name, value, type, checked } = target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  }

  onSaveButtonClick() {
    const {
      name,
      description,
      image,
      rare,
      attr1,
      attr2,
      attr3,
      trunfo,
    } = this.state;

    if (localStorage.getItem('card') === null) {
      localStorage.setItem('card', JSON.stringify([{ name,
        description,
        image,
        rare,
        attr1,
        attr2,
        attr3,
        trunfo }]));
    } else {
      localStorage.setItem('card', JSON.stringify([
        ...JSON.parse(localStorage.getItem('card')),
        { name,
          description,
          image,
          rare,
          attr1,
          attr2,
          attr3,
          trunfo },
      ]));
    }

    this.clearStatesInputs();
  }

  clearStatesInputs() {
    this.setState({
      name: '',
      description: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      image: '',
      rare: 'normal',
      trunfo: false,
    });
  }

  hasTrunfo() {
    const cards = JSON.parse(localStorage.getItem('card')) || [];

    return cards.some(({ trunfo }) => trunfo);
  }

  isSaveButtonDisabled() {
    const {
      name,
      description,
      image,
      rare,
      attr1,
      attr2,
      attr3,
    } = this.state;

    if (
      name.length === 0
        || description.length === 0 || image.length === 0 || rare.length === 0) {
      return true;
    }

    const maxAttrs = 90;
    const minAttrs = 0;
    const sumAttrs = 210;

    if ((Number(attr1) + Number(attr2) + Number(attr3)) > sumAttrs) {
      return true;
    }

    if (
      Number(attr1) > maxAttrs || Number(attr2 > maxAttrs || Number(attr3) > maxAttrs)) {
      return true;
    }

    if (
      Number(attr1) < minAttrs || Number(attr2 < minAttrs || Number(attr3) < minAttrs)) {
      return true;
    }

    return false;
  }

  render() {
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      trunfo,
    } = this.state;

    return (
      <main>
        <div>
          <Form
            cardName={ name }
            cardDescription={ description }
            cardAttr1={ attr1 }
            cardAttr2={ attr2 }
            cardAttr3={ attr3 }
            cardImage={ image }
            cardRare={ rare }
            cardTrunfo={ trunfo }
            onInputChange={ this.onInputChange }
            isSaveButtonDisabled={ (this.isSaveButtonDisabled()) }
            onSaveButtonClick={ this.onSaveButtonClick }
            hasTrunfo={ this.hasTrunfo() }
          />
        </div>

        <div>
          <Card
            cardName={ name }
            cardDescription={ description }
            cardAttr1={ attr1 }
            cardAttr2={ attr2 }
            cardAttr3={ attr3 }
            cardImage={ image }
            cardRare={ rare }
            cardTrunfo={ trunfo }
            onInputChange={ this.onInputChange }
          />
        </div>
        <div>
          <h1>Card Salva</h1>
          {localStorage.getItem('card')}
        </div>
      </main>
    );
  }
}

export default App;
