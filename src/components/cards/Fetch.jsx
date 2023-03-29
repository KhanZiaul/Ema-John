import React, { useEffect, useState } from 'react';
import ShowCards from './ShowCards';
import './Fetch.css'

const Cards = () => {
    const [datas,setdatas] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setdatas(data))
    },[])

    function cartProduct(product){

      console.log(product)
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
        <div className='text-center p-5 bg-orange-400 text-white rounded-lg'>
          <h2 className='text-2xl font-semibold'>Order Summary</h2>
          <p className='mt-8 text-left font-medium'>Selected items : </p>
        </div>
      </div>
    );
};

export default Cards;