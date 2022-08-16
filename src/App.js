import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Filter from './components/Filter';

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
      cards: [],
      nameSearch: '',
      rareSearch: 'todas',
      checkedSearch: false,
      inputsSearchNameRare: false,
      filterCards: [],
    };
  }

  onInputChange({ target }) {
    const { name, value, type, checked } = target;
    let filterTemp = [];
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    }, () => {
      const { nameSearch, rareSearch, checkedSearch, cards } = this.state;
      filterTemp = cards.filter((cardName) => {
        const card = cardName.name.toLowerCase();
        return card.includes(nameSearch.toLowerCase());
      });
      if (rareSearch !== 'todas') {
        filterTemp = filterTemp.filter(({ rare }) => rare === rareSearch);
      }
      if (checkedSearch === true) {
        filterTemp = filterTemp.filter(({ trunfo }) => trunfo === checkedSearch);
        this.setState({
          inputsSearchNameRare: true,
        });
      } else {
        this.setState({
          inputsSearchNameRare: false,
        });
      }
      this.setState({
        filterCards: filterTemp,
      });
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
    this.setState((prevState) => ({
      cards:
          [...prevState.cards, { name,
            description,
            image,
            rare,
            attr1,
            attr2,
            attr3,
            trunfo }],
    }), () => {
      const { cards } = this.state;

      this.setState({
        filterCards: cards,
      });
    });

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
    const { filterCards } = this.state;

    return filterCards.some(({ trunfo }) => trunfo);
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

  deleteCardFromList(name) {
    const { filterCards } = this.state;
    const newCard = filterCards.filter((card) => card.name !== name);
    this.setState(() => ({
      filterCards: [...newCard],
      checkedSearch: false,
    }));
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
      cards,
      nameSearch,
      filterCards,
      rareSearch,
      checkedSearch,
      inputsSearchNameRare,
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
          />
        </div>
        <div>
          <Filter
            searchName={ nameSearch }
            onInputChange={ this.onInputChange }
            cards={ cards }
            cardRare={ rareSearch }
            cardTrunfo={ checkedSearch }
            able={ inputsSearchNameRare }
          />
        </div>
        <div>
          <h1>Card Salva</h1>
          { filterCards.map((card) => (
            <section key={ card.name }>
              <Card
                cardName={ card.name }
                cardDescription={ card.description }
                cardAttr1={ card.attr1 }
                cardAttr2={ card.attr2 }
                cardAttr3={ card.attr3 }
                cardImage={ card.image }
                cardRare={ card.rare }
                cardTrunfo={ card.trunfo }
              />
              <button
                type="button"
                data-testid="delete-button"
                onClick={ () => (
                  this.deleteCardFromList(card.name)
                ) }
              >
                Excluir
              </button>
            </section>
          ))}
        </div>
      </main>
    );
  }
}

export default App;
