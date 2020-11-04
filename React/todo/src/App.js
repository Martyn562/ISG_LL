import React, { useState } from 'react';

import './App.css';

import ItemInput  from './components/ItemInput/ItemInput';
import ItemList  from './components/ItemList/ItemList';

const App = () => {

  const [items, setItems] = useState([]);
  const [value, setValue] = useState('');

  const addItems = ( ) =>{
    if(value){
    setItems([...items, value]);
    setValue('');
    }
  }

       return (

        <div className='container'>
          <h1 className='main-title'>ToDo List</h1>
          <ItemInput value = {value} setValue={setValue} addItems = {addItems}/>
          <div className='todo-list'>
            <ItemList items = {items}/>
          </div> 
        </div>
    )
  
}

export default App;