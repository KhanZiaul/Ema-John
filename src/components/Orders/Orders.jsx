import React from 'react';
import Cart from '../Cart/Cart';

const Orders = () => {
    return (
        <div className='grid grid-cols-1 gap-20 md:grid-cols-2 md:px-16 md:py-12'>
          <div>
            <h2>Order list</h2>
          </div>
          <div>
            <Cart carts={[]}></Cart>
          </div>
        </div>
    );
};

export default Orders;