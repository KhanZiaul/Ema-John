import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';
import { deleteShoppingCart, removeFromDb } from '../utilities/fakedb';
import { CreditCardIcon } from '@heroicons/react/24/solid'

const Orders = () => {
    const products = useLoaderData()
    const [selectedProducts, setSelectedProducts] = useState(products)

    function deleteItem(id) {
        const newProduct = selectedProducts.filter(product => product.id !== id)
        setSelectedProducts(newProduct)
        removeFromDb(id)
    }
    function deleteAllItems() {
        setSelectedProducts([])
        deleteShoppingCart()
    }

    return (
        <div className='grid grid-cols-1 gap-20 md:grid-cols-2 px-5 md:px-16 my-12'>
            <div>
                {
                    selectedProducts.map(product => <ReviewItems
                        key={product.id}
                        product={product}
                        deleteItem={deleteItem}
                    >
                    </ReviewItems>)
                }
            </div>
            <div>
                <Cart
                    carts={selectedProducts}
                    deleteAllItems={deleteAllItems}
                >
                    <Link to='/checkout' className='text-white flex justify-center items-center gap-4 bg-green-700 md:w-[300px] md:h-[45px] py-3 mt-8 w-full font-medium rounded-xl hover:bg-green-900'>
                    <button >Procced Checkout</button>
                    <CreditCardIcon className='w-5 h-5'></CreditCardIcon>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;