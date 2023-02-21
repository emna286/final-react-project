import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'

function Cart() {
  const shop= useSelector(state=>state.shop)
  const total=shop.reduce((sum,acc)=>acc.price+sum,0)
  console.log(total)
  return (
    <>
  <div>
   <h1> the total is {total} dt </h1>
  </div>
    <div className="cards">

{shop.map(element=><Product name={element.name} price={element.price} image={element.image} id={element.id} type='delete' key={element.id}/>) }


</div>
</>

  )
}

export default Cart
