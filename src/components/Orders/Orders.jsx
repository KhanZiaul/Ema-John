import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import './Orders.css'
import { TrashIcon } from '@heroicons/react/24/solid'

const Orders = () => {
    const products = useLoaderData()
    console.log(products)
    return (
        <div className='grid grid-cols-1 gap-20 md:grid-cols-2 md:px-16 md:py-12'>
            <div>
                {
                    products.map(product => {
                        return (
                            <div key={product.id} className='ordersItems border-2 border-gray-300 rounded-lg mb-5'>
                                <div className='flex items-center justify-between px-2'>
                                    <div className='flex'>
                                        <img className='w-[91px] h-[91px]' src={product.img} alt="" />
                                        <div>
                                            <p>{product.name}</p>
                                            <p>Price : <span className='text-yellow-500'>${product.price}</span></p>
                                            <p>Quantity : <span className='text-yellow-500'>{product.quantity}</span></p>
                                        </div>
                                    </div>

                                    <div className='bg-red-200 p-3 rounded-full'>
                                        <TrashIcon className="h-6 w-6 text-red-500" />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <Cart carts={products}></Cart>
            </div>
        </div>
    );
};

export default Orders;