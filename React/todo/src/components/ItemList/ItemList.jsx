
import './ItemList.scss';
import Item from '../Item/Item';

  const ItemList = ({items}) => {
    // const [items, setItems] = useState([{  //function which change/create(?)
    //   id: '1',
    //   content: 'lalaa',
    // }])h


    return (
      console.log(items),
        <div className='content'>
          {
            items.map( item => {
              return (
              <Item key ={item} 
              text = {item}
              />
              )
            })
          }
        </div>

      )
    }

  export default ItemList;