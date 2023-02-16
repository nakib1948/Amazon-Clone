import React, { useContext } from 'react';
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { Usercontext } from '../../App';
import { getBasketTotal } from '../Reducer';
const Subtotal = () => {
    const [{basket},dispatch]=useContext(Usercontext)
    const total=basket.reduce((previousValue, currentValue)=> {
        return previousValue + currentValue.price;
    }, 0);
    console.log(total)
    return (
        <div className='subtotal'>
            <CurrencyFormat
            renderText={(value)=>(
                <>
               <p>
              Subtotal({basket.length} items): <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This Order Contains a gift
            </small>
                
                
                </>
            )}


            decimalScale={2}
            value={total}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
            
            />
            <button>Proceed to Checkout
            </button>
        </div>
    );
};

export default Subtotal;