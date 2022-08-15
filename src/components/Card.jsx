import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
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
      <div id="card-box">
        <h2>
          Card Name:
        </h2>
        <h3 data-testid="name-card">
          { cardName }
        </h3>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <div>
          <p data-testid="description-card">
            Description:
            { cardDescription }
          </p>
        </div>
        <h4 data-testid="attr1-card">
          Attr 01:
          { cardAttr1 }
        </h4>
        <h4 data-testid="attr2-card">
          Attr 02:
          { cardAttr2 }
        </h4>
        <h4 data-testid="attr3-card">
          Attr 03:
          { cardAttr3 }
        </h4>
        <div>
          <h4 data-testid="rare-card">
            Raridade:
            <br />
            { cardRare }
          </h4>
        </div>

        { cardTrunfo && (
          <h3 data-testid="trunfo-card">Super Trunfo</h3>
        )}
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
