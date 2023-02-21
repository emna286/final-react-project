import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'; 
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import Product from './Product';

export default function Products() {
 const products=useSelector(state=>state.products)
 const [price,setPrice]=useState(600)
 const handleChange =(e)=>{
  setPrice (e.target.value)
 }

  return (
    <div>
      <br/>
     <h1>Products</h1>

  <input type="range" id="slider" min="0" max="600" value={price} step="10" onChange={handleChange}/> <br />
  
   price between 0 dt and {price} dt

<div className="cards">
{products.filter(elm=>elm.price<price).map(element=><Product name={element.name} price={element.price} image={element.image} id={element.id} type='add' key={element.id}/>) }

</div>
</div>
  )
}
