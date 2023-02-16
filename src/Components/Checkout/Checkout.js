import React, { useContext } from 'react';
import { Usercontext } from '../../App';
import './Checkout.css'
import CheckoutProducts from './CheckoutProducts';
import Subtotal from './Subtotal';
const Checkout = () => {
    const [{basket},dispatch]=useContext(Usercontext)
    return (
        <div className='checkout'>
            <div className='checkout-left'>
            <img className='checkout_ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
            {
                basket.length===0 ?(
                    <div>
                        <h2>Your Shopping Basket is empty</h2>
                        <p>you have no items in your basket.To buy one or more items, click
                             "Add to basket" next to the item.
                        </p>
                    </div>
                ):(
                    <div>
                        <h2 className='checkout_title'>Your Shopping Basket</h2>
                        {
                            basket.map(item => <CheckoutProducts 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                />)
                        }
                    </div>
                )
            }
            </div>

            {
                basket.length > 0 && (
                    <div className='checkout-right'>
                        <Subtotal/>
                    </div>
                )
            }
           
           
        </div>
    );
};

export default Checkout;