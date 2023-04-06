import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import './Shop.css'
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../utilities/fakedb';

const Shop = () => {
  const [datas, setdatas] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setdatas(data))
  }, [])

  useEffect(() => {
    let savedCarts = [];
    let getCarts = getShoppingCart();
    for (let id in getCarts) {
      let matchProduct = datas.find((product) => product.id === id);
      if (matchProduct) {
        let newQuantity = getCarts[id];
        matchProduct.quantity = newQuantity;
        savedCarts.push(matchProduct);
      }
    }
    setCarts(savedCarts);
  }, [datas])


  function cartProduct(product) {
    // const newProducts = [...carts,product] ;
    let newProducts = [];
    const exists = carts.find(pd => pd.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newProducts = [...carts, product]
    }
    else {
      exists.quantity = exists.quantity + 1;
      const remaining = carts.filter(pd => exists.id !== pd.id);
      newProducts = [...remaining, exists]
    }
    setCarts(newProducts);
    addToDb(product.id)
  }

  function deleteAllItems() {
    setCarts([])
    deleteShoppingCart()
  }

  return (
    <div className='showData m-5 flex flex-col-reverse md:flex-row'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {
          datas.map((data) => <Cards
            key={data.id}
            data={data}
            cartProduct={cartProduct}
          >
          </Cards>)
        }
      </div>
      <div>
        <Cart
          carts={carts}
          deleteAllItems={deleteAllItems}
        ></Cart>
      </div>
    </div>
  );
};

export default Shop;