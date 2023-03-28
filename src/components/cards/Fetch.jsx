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
    return (
      <div className='showData m-5'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {
            datas.map((data) => <ShowCards data={data}></ShowCards>)
          }  
        </div>
        <div>
          <h2 className='text-2xl text-center'>Order Summary</h2>
        </div>
      </div>
    );
};

export default Cards;