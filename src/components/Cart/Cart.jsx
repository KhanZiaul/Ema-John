import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'

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

            <div className='flex flex-col justify-center items-center'>
                
            <div onClick={()=> deleteAllItems()} className='text-white bg-red-500 md:w-[300px] md:h-[45px] flex justify-center items-center gap-3 py-3 mt-8 w-full font-medium rounded-xl hover:bg-red-800'>
            <button >Clear Cart</button>
            <TrashIcon className='w-5 h-5'></TrashIcon>
            </div>

            {
                children
            }
            </div>

        </div>

    );
};

export default Cart;