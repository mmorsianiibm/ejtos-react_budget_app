import React, { useContext,useState } from 'react';
import { AppContext } from '../context/AppContext';
import '../index.css';

const Currency = () => {
  const {dispatch,currency } = useContext(AppContext);
  const [currencyString, setCurrencyString] = useState(currency);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })

        if (val==="$") setCurrencyString( "$ Dollar");  
        if (val==="£") setCurrencyString( "£ Pound");
        if (val==="€") setCurrencyString( "€ Euro");
        if (val==="₹") setCurrencyString( "₹ Ruppee");   
    }

    
    

  return (
        <div className='color-text-white' > Currency({currencyString})   {
            <select   
            name="Currency" id="Currency"
            className='color-green' 
             onChange={event=>changeCurrency(event.target.value)}
            >
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>       
                
            </select>	
        }	
    </div>
    );
};

export default Currency;