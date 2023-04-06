import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import './Orders.css'

const Orders = () => {
    const products = useLoaderData()
    console.log(products)
    return (
        <div className='grid grid-cols-1 gap-20 md:grid-cols-2 md:px-16 md:py-12'>
          <div>
            {
                products.map(product=> {
                    return (
                        <div key={product.id} className='ordersItems border-2 border-gray-300 rounded-lg mb-5'>
                            <div>
                                <img className='w-[91px] h-[91px]' src={product.img} alt="" />
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