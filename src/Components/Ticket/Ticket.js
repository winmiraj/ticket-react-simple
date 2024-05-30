import React, { useEffect, useState } from 'react';
import './Ticket.css';
import Cart from '../Cart/Cart';
import TicketCost from '../TicketCost/TicketCost';
//react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Ticket = () => {
    //ticket information set
    const [tickets,setickets] = useState([]);
    //tickets items set
    const [items,setItems] = useState([]);
    //data load
    useEffect(()=>{
        fetch('./ticket.JSON')
        .then(res=>res.json())
        .then(data=>setickets(data))
    },[])

    const handleIncrease = (ticket)=>{
        const count =  [...items,ticket];
        setItems(count)
    //react-toastify use
        toast.info(ticket.depot_name,
            {
            icon: (theme,type) =>  <img width={80} src={ticket.img} alt=''/>
      });
   
       
    }
    return (
        <div className='ticket-box'>
            <div className='container'>
            <div className='ticket-container'>
               {
                    tickets.map(ticket=><Cart
                    key = {ticket.id}
                    ticket={ticket}
                    handleIncrease={handleIncrease}
                    ></Cart>)
                  }
                  
           </div>
            <div>
                <TicketCost items={items}></TicketCost>
                <ToastContainer theme="colored" style={{fontSize: 13}} />
            </div>
            </div>
         
        </div>
    );
};

export default Ticket;