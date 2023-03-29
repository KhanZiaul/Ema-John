import React from 'react';

const ShowCards = (props) => {

    const { img, name, price, seller, ratings } = props.data;

    const cartProduct = props.cartProduct ;

    return (
        <div className='border-2 border-gray-300 rounded-lg p-6 relative'>
            <img src={img} alt="" />
            <h2 className='my-2 text-xl font-medium'>{name}</h2>
            <h3 className='font-medium'>Price : ${price}</h3>
            <p className='mt-6'>Manufacturer : {seller}</p>
            <p className='my-2'>Rating : {ratings} stars</p>
            <div onClick={() => cartProduct(props.data)} className='cursor-pointer flex justify-center p-4 gap-4 bg-orange-500 absolute left-0 bottom-0 w-[100%] mt-4 text-white hover:bg-orange-900'>
                <h3>Add To Cart</h3>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>

                </div>
            </div>
        </div>
    );
};

export default ShowCards;