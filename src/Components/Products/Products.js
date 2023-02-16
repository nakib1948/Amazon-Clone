import React, { useContext } from 'react';
import './Products.css'
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from '../StateProvider';
import { Usercontext } from '../../App';
const Products = ({id,title,image,price,rating}) => {
   
    const [state,dispatch]=useContext(Usercontext)

    const addToBasket=()=>{
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            }
        })
    }
    return (
        <div className='product'>
            <div className="product_info">
            <p>{title}</p>
            <p className='product_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product_rating">
                {
                    Array(rating).fill().map((_)=>(
                        <p style={{color:'#cd9042'}}><StarIcon></StarIcon></p>
                    ))
                }
            </div>
            </div>
           
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    );
};

export default Products;