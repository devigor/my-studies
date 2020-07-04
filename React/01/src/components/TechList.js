import React, { Component } from 'react'

import { TechItem } from './TechItem'

export class TechList extends Component {
  state = {
    newTech: '',
    techs: []
  }

  handleInputChange = e => {
    const newTech = e.target.value
    this.setState({ newTech })
  }

  handleSubmit = e => {
    e.preventDefault()
    
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ''
    })
  }

  handleDelete = tech => {
    this.setState({
      techs: this.state.techs.filter(t => t !== tech)
    })
  }

  // Executa assim que o componente aparece na tela
  componentDidMount() {
    const techs = localStorage.getItem('techs')

    if (techs) {
      this.setState({ techs: JSON.parse(techs) })
    }
  }

  // Executa sempre que houver alterações nas props ou no estado
  componentDidUpdate(prevProps, prevstate) {
    if (prevstate.techs !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs))
    }
  }
  
  // Exevuta quando o componente deixa de existir
  componentWillUnmount() {}


  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        
        <ul>
          {
            this.state.techs.map(tech => (
              <TechItem
                key={ tech }
                tech={ tech }
                handleDelete={ () => this.handleDelete(tech) }
              />
            ))
          }
        </ul>
        <input type="text"
          onChange={ this.handleInputChange }
          value={ this.state.newTech }
        />
        <button type="submit">Enviar</button>
      </form>
    )
  }
}