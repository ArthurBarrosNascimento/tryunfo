import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.isSaveButtonDisabled = this.isSaveButtonDisabled.bind(this);
  }

  state = {
    name: '',
    description: '',
    attr1: '0',
    attr2: '0',
    attr3: '0',
    image: '',
    rare: '',
    trunfo: false,
  }

  onInputChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  isSaveButtonDisabled() {
    const {
      name,
      description,
      image,
      rare,
    } = this.state;

    if (
      name.length === 0
        || description.length === 0 || image.length === 0 || rare.length === 0) {
      return false;
    }

    return true;
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
            isSaveButtonDisabled={ this.isSaveButtonDisabled }
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
      </main>
    );
  }
}

export default App;
