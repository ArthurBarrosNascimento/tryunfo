import { React, Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
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
    } = this.props;

    return (
      <div>
        <div>
          <h2 data-testid="name-card">
            {' '}
            { cardName }
            {' '}
          </h2>
        </div>

        <div>
          <img
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
          />
        </div>

        <div>
          <p data-testid="description-card">
            {' '}
            { cardDescription }
            {' '}
          </p>
        </div>

        <div>
          <h3 data-testid="attr1-card">
            {' '}
            { cardAttr1 }
            {' '}
          </h3>
          <h3 data-testid="attr2-card">
            {' '}
            { cardAttr2 }
            {' '}
          </h3>
          <h3 data-testid="attr2-card">
            {' '}
            { cardAttr3 }
            {' '}
          </h3>
        </div>

        <div>
          <h4 data-testid="rare-card">
            {' '}
            { cardRare }
            {' '}
          </h4>
        </div>

        { cardTrunfo && (
          <div data-testid="trunfo-card">
            Super Trunfo
          </div>) }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
