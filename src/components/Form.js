import { React, Component }from 'react'

class Form extends Component {
  render () {
    return (
      <form>
      <label> Nome da Carta
        <input type='text' data-testid="name-input"></input>
      </label>

      <label> Descrição 
        <textarea cols='30' rows='5' data-testid="description-input"></textarea>
      </label> 

      <label> Attr01
          <input type='number' data-testid="attr1-input"></input>
      </label>

      <label> Attr02
          <input type='number' data-testid="attr2-input"></input>
      </label>

      <label> Attr03
          <input type='number' data-testid="attr3-input"></input>
      </label>

      <label> Imagem
          <input type='text'data-testid="image-input"></input>
      </label>

      <label> Raridade
          <select data-testid="rare-input">
            <option value='normal'>normal</option>
            <option value='raro'>raro</option>
            <option value='muito raro'>muito raro</option>
          </select>
      </label>

      <label>
        <input type='checkbox' data-testid="trunfo-input"></input>
        Super Trybe Trunfo
      </label>

      <button data-testid="save-button">Salvar</button>
      </form>
    )
  }
}

export default Form;