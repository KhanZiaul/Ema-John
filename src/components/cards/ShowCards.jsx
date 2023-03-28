import React from 'react';

const ShowCards = (props) => {
    console.log(props.data)
    const {img , name , price , seller , ratings} = props.data ;
    return (
        <div className='border-2 border-gray-300 rounded-lg p-6 '>
            <img src={img} alt="" />
            <h2 className='my-3 text-xl font-medium'>{name}</h2>
            <h3 className='font-medium'>Price : ${price}</h3>
            <p className='mt-6'>Manufacturer : {seller}</p>
        </div>
    );
};

export default ShowCards;