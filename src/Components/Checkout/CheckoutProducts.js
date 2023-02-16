import React, { useContext } from 'react';
import StarIcon from '@mui/icons-material/Star';
import './CheckoutProduct.css'
import { Usercontext } from '../../App';
const CheckoutProducts = ({id,price,image,rating,title}) => {

    const [{basket},dispatch]=useContext(Usercontext)

    const removeFromBasket=()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id
        })
    }
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct_image' src={image} alt="" />

            <div className="checkoutProduct_info">
                <p className='checkoutProduct_title'>{title}</p>
                <p className='checkoutProduct_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                {
                    Array(rating).fill().map((_,i)=>(
                        <p style={{color:'#cd9042'}}><StarIcon></StarIcon></p>
                    ))
                }     
            </div>
            <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    );
};

export default CheckoutProducts;