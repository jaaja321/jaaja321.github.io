import React, { Component } from 'react'
import Info from './Info';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      info: false,
    };
  }
  isBad() {
    let result = null
    if(this.props.item.bad === 1){
      result = 'Незаметны'
    }
    if(this.props.item.bad === 2){
      result = 'Не столь заметны'
    }
    if(this.props.item.bad === 3){
      result = 'Заметны'
    }
    return result
  }
  infoPressed(info) {
  }
  addPressed() {
    if (!this.props.item.selected){
      this.props.onAdd(this.props.item)
      this.props.item.selected = true
    } else {
      this.props.onDelete(this.props.item.id)
      this.props.item.selected = false
    }
  }
  
  render() {
    return (
      <div className={`item ${this.props.item.selected && 'active'}`}>
        <img src={"./img/" + this.props.item.img} alt='aaboba' />
        <h2>{this.props.item.title}</h2>
        <p>Повреждения: <span className={`${this.isBad().replace(/\s/g, '')}`}>{this.isBad()}</span></p>
        <b>{this.props.item.price}₴</b>
        <div onClick={() => this.infoPressed(this.state.info)} className={`info-button ${this.state.info && 'active'}`}>i</div>
        <div onClick={() => this.addPressed()} className='add-to-cart'>{this.props.item.selected ? '-' : '+'}</div>
      </div>
    )
  }
}

export default Item