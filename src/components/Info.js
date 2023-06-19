import React, { Component } from 'react'

export class Info extends Component {
  render() {
    console.log(this.props.item.title)
    return (
      <div className='info'>
        <img src={"./img/" + this.props.item.img}/>
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
      </div>
    )
  }
}

export default Info