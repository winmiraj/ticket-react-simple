import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusAlt} from '@fortawesome/free-solid-svg-icons';

 
const Cart = (props) => {
  //all ticket cart set
    const {depot_name,route,number_of_buses,name,location,time,price,img} = props.ticket;
    //console.log(props);

    return (
      // show cart information website
        <div  className='cart' > 
           <div>
                <img  className='bus-img'src={img} alt="" />
            </div>
            <div className='cart-inf'>
            <h5>Depot Name: {depot_name}</h5>
            <h5>Bus Name: {name}</h5>
            <p>Route: {route}</p>
             <p>Total Bus: {number_of_buses}</p>
             <p>Location: {location}</p>
             <h6>Time: {time}</h6>
             <p>Ticket Price: ${price}</p>
             <button 
             className='btn-buy' onClick={()=>props.handleIncrease(props.ticket)}>{ <FontAwesomeIcon icon={faBusAlt} />} Buy Now</button>
        
             <br />
             {/* fontawesome icon use */}
            <i class="fa-brands fa-square-facebook phone"></i>  <i class="fa-solid fa-phone phone"></i>
             
          </div>
            
           
        </div>
    );
};

export default Cart;