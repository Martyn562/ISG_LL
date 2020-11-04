
import React from 'react';
import './ItemInput.css';

const ItemInput = ({value, setValue, addItems}) => {
  
    return (

        <div>
          <input type='text' className='item-input' placeholder='some text' onChange={(e) => setValue(e.target.value)} value = {value}/>
          <button className='iteminput-btn' onClick={() => addItems()}>Add Item</button>
        </div>

    )
  }

export default ItemInput;
