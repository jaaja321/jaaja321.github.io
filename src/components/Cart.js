import React, {useState} from 'react'
import { RiShoppingBasketFill } from 'react-icons/ri'
import { IoIosCloseCircle } from 'react-icons/io'
import Order from './Order'

const Ntext = () => {
    return(
        <h3>тут появятся выбранные товары как только вы их выберете</h3>
    )
}

const Ytext = (props) => {
    return(
        <div>
            <h3>когда определитесь с покупкой позвоните на номер <span className='number-cart'>+380682154572</span> и мы,поговорив с вами,оформим ваш заказ</h3>
            <p className='cart-price'>Общая стоимость: <span>{createTotal(props)}</span>₴</p>
        </div>
    )
}

const showOrders = (props) => {
    return(
        <div>
            {props.orders.map(el => (
                <Order key={el.id} item = {el} onDelete = {props.onDelete}/>
            ))}
        </div>)
}

const showNothing = () => {
    return(
        <div className='cart-empty'>
            <h2>Это корзина товаров</h2>
            <h3>тут появятся выбранные товары как только вы их выберете</h3>
        </div>
    )
}

const createTotal = (props) => {
    let total = 0
    if (props.orders) {
      props.orders.forEach((el) => {
        total += parseFloat(el.price)
      });
    }
    console.log(total)
    return total.toFixed(2)
}

export default function Cart(props) {
    let [cartOpen, setCartOpen] = useState(false)
  return (
    <div className={`cart ${cartOpen && 'active'}`}>
        <RiShoppingBasketFill onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-open ${cartOpen && 'active'}`}/>
        <IoIosCloseCircle className={`shop-cart-close ${cartOpen && 'active'}`}/>
        <aside className={`shop-cart ${cartOpen && 'active'}`}>
            <div className='cart-empty'>
                <h2>Корзина товаров</h2>
                {props.orders.length > 0 ? Ytext(props) : Ntext()}
            </div>
            {props.orders.length < 0 ? showNothing() : showOrders(props)}
        </aside>
    </div>
    )}
