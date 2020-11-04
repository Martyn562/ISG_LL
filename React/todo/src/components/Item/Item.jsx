
import './Item.scss';

const Item = ({text,id}) => {

    return (

          <div className='row-item'>
            <p className='item-content'>{text}</p>
            <button className='item-btn'>X</button>
          </div>


      )
  }

  export default Item;