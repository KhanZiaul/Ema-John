import React from 'react';

const Order = ({carts}) => {

    console.log(carts)

    let totalPrice = 0;

    let shipping = 0;

    for(const product of carts){

        totalPrice = totalPrice + product.price ;

        shipping = shipping + product.shipping ;
    }

    let tax = (totalPrice*7) / 100 ;

    let grandTotal = totalPrice + shipping + tax ;

    return (
        <div className='text-center p-5 bg-orange-400 text-white rounded-lg sticky top-0'>
            
            <h2 className='text-2xl font-semibold underline'>Order Summary</h2>

            <p className='text-xl mt-8 text-left font-medium'>Selected items : {carts.length}</p>

            <p className='text-xl mt-8 text-left font-medium'>Total Price : {totalPrice}</p>

            <p className='text-xl mt-8 text-left font-medium'>Total Shipping Charge: ${shipping}</p>

            <p className='text-xl mt-8 text-left font-medium'>Tax : ${tax.toFixed(2)}</p>

            <p className='text-xl mt-8 text-left font-medium'>Grand Total: ${grandTotal.toFixed(2)}</p>

        </div>

    );
};

export default Order;