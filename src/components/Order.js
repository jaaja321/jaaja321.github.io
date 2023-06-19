import React, { Component } from 'react'
import {TiDelete} from 'react-icons/ti'

export class Order extends Component {
  pressed(){
    this.props.onDelete(this.props.item.id)
    this.props.item.selected = false
  }
  render() {
    return (
      <div className='order-item'>
        <img src={"./img/" + this.props.item.img}/>
        <h2>{this.props.item.title}</h2>
        <b>{this.props.item.price}₴</b>
        <TiDelete className='cart-delete' onClick={() => this.pressed()} />
      </div>
    )
  }
}

export default Order