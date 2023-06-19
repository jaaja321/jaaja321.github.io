import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Cart from "./components/Cart";
import React from "react";
import Info from "./components/Info";
import LoginMain from "./components/LoginMain";
import RegisterMain from "./components/RegisterMain";
import TestParent from "./components/TestParent";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Walker’s Ikon Tanker',
          img: '1.webp',
          desc: 'Черные очки баллистические Walker’s Ikon Tanker затемненное стекло',
          category: 'тян',
          price: '49.99',
          selected: false,
          bad: 1,
        },
        {
          id: 2,
          title: 'Seta Decor',
          img: '2.webp',
          desc: 'Очки Seta Decor Кот Базилио 15-289BLK Черные',
          category: 'тян',
          price: '50',
          selected: false,
          bad: 2,
        },
        {
          id: 3,
          title: 'Select CS6-FL-GR',
          img: '3.webp',
          desc: 'Защитные очки Select CS6-FL-GR поляризационные Плавающие Зеленый/Хамелеон',
          category: 'Защитные',
          price: '149.99',
          selected: false,
          bad: 3,
        },
        {
          id: 4,
          title: 'Seta Decor',
          img: '2.webp',
          desc: 'Очки Seta Decor Кот Базилио 15-289BLK Черные',
          category: 'тян',
          price: '50',
          selected: false,
          bad: 3,
        },
        {
          id: 5,
          title: 'Seta Decor',
          img: '2.webp',
          desc: 'Очки Seta Decor Кот Базилио 15-289BLK Черные',
          category: 'тян',
          price: '50',
          selected: false,
          bad: 3,
        },
        {
          id: 6,
          title: 'Seta Decor',
          img: '2.webp',
          desc: 'Очки Seta Decor Кот Базилио 15-289BLK Черные',
          category: 'тян',
          price: '50',
          selected: false,
          bad: 3,
        },
        {
          id: 7,
          title: 'Walker’s Ikon Tanker',
          img: '1.webp',
          desc: 'Черные очки баллистические Walker’s Ikon Tanker затемненное стекло',
          category: 'тян',
          price: '49.99',
          selected: false,
          bad: 1,
        },
        {
          id: 8,
          title: 'Walker’s Ikon Tanker',
          img: '1.webp',
          desc: 'Черные очки баллистические Walker’s Ikon Tanker затемненное стекло',
          category: 'тян',
          price: '49.99',
          selected: false,
          bad: 1,
        },
      ],
    }
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
  }
  render(){
    return (
      <div className="wrapper">
        <Header orders={this.state.orders}/>
        <Items items={this.state.items} onAdd={this.addToOrder} onDelete = {this.deleteOrder}/>
        <Cart orders={this.state.orders} onDelete = {this.deleteOrder}/>
        <TestParent items={this.state.items}/>
        <Footer />
      </div>
    );
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id){
        isInArray = true
      }
    })
    if (isInArray !== true){
      this.setState({orders: [...this.state.orders, item]})
      this.setState({selected: true})
    }
  }

  deleteOrder(id) {
    this.setState({orders: [...this.state.orders.filter(el => el.id !== id)]})
  }
}

export default App;
