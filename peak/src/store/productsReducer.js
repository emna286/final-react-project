import one469 from '../images/one469.jpg';
import two499 from '../images/two499.jpg';
import t499 from '../images/t499.jpg';
import f469 from '../images/f469.jpg';
import fi379 from '../images/fi379.jpg';
import s379 from '../images/s379.jpg';
import se329 from '../images/se329.jpg';
import e349 from '../images/e349.jpg';
import n269 from '../images/n269.jpg';
import te499 from '../images/te499.jpg';
import el319 from '../images/el319.jpg';


const products= [{ name:"chaussure-carbon-noir", price:469 , image:one469},
{name:"chaussure-unity-vert-bleu-rose" ,price:499  ,image:two499},
{name:"chaussure-unity-bleu-jaune" ,price:499 ,image:t499},
{name:"chaussure-gear-iii-blanc-violet", price:469, image:f469},
{name:"chaussure-strack-gris-claire" ,price:379 ,image:fi379},
{name:"chaussure-strack-blanc", price:379 ,image:s379},
{name:"chaussure-stars-prime-ii-violet" ,price:329,image:se329},
{name:"chaussure-p-blanc-casse-noir " ,price:349 , image:e349},
{name:"chaussure-skate-plus-noir", price:269  ,image:n269},
{name:"chaussure-motive-blanc" ,price:499  ,image:te499},
{name:"chaussure-lingo-iii-blanc-vert" ,price:319  ,image:el319}
]
products.forEach(product=>product.id=crypto.randomUUID())
 
const shop=[];

//2-create reducer to set state and change it
export const productsReducer= (state={products,shop},action)=>{
   switch (action.type){
    case 'ADD': {const selectedProduct=state.products.filter(product=>product.id===action.payload);
   const newShop=[...state.shop,...selectedProduct]
return {...state,shop:newShop}}

case 'DELETE': {const newShop= state.shop.filter(item=>item.id!==action.payload)
return {...state,shop:newShop}
}

default:return state
   }


}