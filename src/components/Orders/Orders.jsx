import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';

const Orders = () => {
    const products = useLoaderData()
    console.log(products)

    function deleteItem(id){
        console.log(id)
    }

    return (
        <div className='grid grid-cols-1 gap-20 md:grid-cols-2 md:px-16 my-12'>
            <div>
                {
                    products.map(product => <ReviewItems
                        key={product.id}
                        product={product}
                        deleteItem={deleteItem}
                    >
                    </ReviewItems>)
                }
            </div>
            <div>
                <Cart carts={products}></Cart>
            </div>
        </div>
    );
};

export default Orders;