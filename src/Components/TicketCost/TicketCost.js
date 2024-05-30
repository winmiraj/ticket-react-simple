import React from 'react';

const TicketCost = (props) => {
  //  console.log(props.items)
    const {items} =props;
    let total = 0;
    for(const cost of items){
        total = total + cost.price;
    }
 
    return (
        <div className='ticket-cost'>
             <h4>Count: {props.items.length} </h4>
             <h4>Total cost: ${total}</h4>
        </div>
    );
};

export default TicketCost;