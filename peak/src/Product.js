import React from 'react'
import Card from 'react-bootstrap/Card'; 
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
export default function Product({image,name,price,type,id}) {
 const dispatch= useDispatch()
  function add (){
if (type==='add'){

  dispatch({type:'ADD',payload:id})
}
if (type==='delete'){
  dispatch({type:'DELETE',payload:id})
}
  }

  let colorType='primary'
  if (type==='delete')
  colorType='danger'
  return (
    <div>

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title><h2>{name}</h2></Card.Title>
        <Card.Text><h5>{price} dt</h5>
        </Card.Text>
        <Button variant={colorType} onClick={add}>{type} card</Button>
      </Card.Body>
    </Card>
    </div>
  )
}