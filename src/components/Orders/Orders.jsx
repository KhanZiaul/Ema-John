import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';
import { deleteShoppingCart, removeFromDb } from '../utilities/fakedb';

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
                ></Cart>
            </div>
        </div>
    );
};

export default Orders;