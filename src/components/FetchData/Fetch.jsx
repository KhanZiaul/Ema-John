import React, { useEffect, useState } from 'react';
import ShowCards from '../cards/ShowCards/ShowCards';
import './Fetch.css'
import Order from '../cards/order summary/Order';
import { addToDb } from '../utilities/fakedb';

const Cards = () => {
    const [datas,setdatas] = useState([]);
    const [carts,setCarts] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setdatas(data))
    },[])

    function cartProduct(product){
      const newProducts = [...carts,product] ;
      setCarts(newProducts) ;
      addToDb(product.id)
    }

    return (
      <div className='showData m-5'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {
            datas.map((data) => <ShowCards 
            key={data.id}
            data={data}
            cartProduct={cartProduct}
            >
            </ShowCards>)
          }  
        </div>
        <div>
          <Order carts ={carts}></Order>
        </div>
      </div>
    );
};

export default Cards;