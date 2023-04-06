import React from 'react';

const Cart = ({carts , deleteAllItems , children}) => {

    // console.log(carts)

    let totalPrice = 0;

    let shipping = 0;

    let quantity = 0 ;

    for(const product of carts){

        totalPrice = totalPrice + product.price * product.quantity;

        shipping = shipping + product.shipping * product.quantity;

        quantity = quantity + product.quantity ;
    }

    let tax = (totalPrice*7) / 100 ;

    let grandTotal = totalPrice + shipping + tax ;

    return (
        <div className='text-center p-5 bg-orange-400 text-white rounded-lg sticky top-0'>
            
            <h2 className='md:text-2xl font-semibold underline'>Order Summary</h2>

            <p className='md:text-xl mt-8 text-left font-medium'>Selected items : {quantity}</p>

            <p className='md:text-xl mt-8 text-left font-medium'>Total Price : {totalPrice}</p>

            <p className='md:text-xl mt-8 text-left font-medium'>Total Shipping Charge: ${shipping}</p>

            <p className='md:text-xl mt-8 text-left font-medium'>Tax : ${tax.toFixed(2)}</p>

            <p className='md:text-xl mt-8 text-left font-medium'>Grand Total: ${grandTotal.toFixed(2)}</p>

            <button onClick={()=> deleteAllItems()} className='text-white bg-red-500 md:w-[300px] md:h-[45px] py-3 mt-8 w-full font-medium rounded-xl hover:bg-red-800'>Clear Cart</button>

            {
                children
            }

        </div>

    );
};

export default Cart;