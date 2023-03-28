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
      <div className='showData'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 m-5'>
          {
            datas.map((data) => <ShowCards data={data}></ShowCards>)
          }  
        </div>
        <div>

        </div>
      </div>
    );
};

export default Cards;