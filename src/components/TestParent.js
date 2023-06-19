import React from 'react'
import Info from './Info'

const infoCall = (items) => {
    console.log(items)
    return (
        <div>
          {items.map(el => (
          <Info key={el.id} item={el}/>
          ))}
        </div>
    )
}

export default function TestParent(props) {
  return (
    <div>
       <button onClick={() => infoCall(props.items)}>mom</button> 
    </div>
  )
}
