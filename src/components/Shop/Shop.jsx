import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import './Shop.css'
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../utilities/fakedb';
import { Link, useLoaderData } from 'react-router-dom';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'

const Shop = () => {

  // Pegination
  const { totalProducts } = useLoaderData()
  // console.log(totalPages)

  const [datas, setdatas] = useState([]);
  const [carts, setCarts] = useState([]);

  // Pegination

  const [currentpage,setCurrentPage] = useState(0)
  const [itemsperPage,setItemsperPage] = useState(10)


  useEffect(() => {
    fetch('http://localhost:8000/products')
      .then(res => res.json())
      .then(data => setdatas(data))
  }, [])

  // Pegination

  const totalPages = Math.ceil(totalProducts / itemsperPage)
  // console.log(totalPages)

  // first option----
  // const pages = []
  // for(let i= 0 ; i < totalPages ; i++){
  //   pages.push(i)
  // }
  // console.log(pages)

  // second option ----

  const pages = [...Array(totalPages).keys()]
  console.log(pages)

  const options = [5,10,15,20]

  function slectedValue(event){
    setItemsperPage(event.target.value)
    setCurrentPage(0)
  }


  useEffect(() => {
    let savedCarts = [];
    let getCarts = getShoppingCart();
    for (let id in getCarts) {
      let matchProduct = datas.find((product) => product._id === id);
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
    const exists = carts.find(pd => pd._id === product._id);
    if (!exists) {
      product.quantity = 1;
      newProducts = [...carts, product]
    }
    else {
      exists.quantity = exists.quantity + 1;
      const remaining = carts.filter(pd => exists._id !== pd._id);
      newProducts = [...remaining, exists]
    }
    setCarts(newProducts);
    addToDb(product._id)
  }

  function deleteAllItems() {
    setCarts([])
    deleteShoppingCart()
  }

  return (
    <>
      <div className='showData m-5 flex flex-col-reverse md:flex-row'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {
            datas.map((data) => <Cards
              key={data._id}
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
          >
            <Link to='/orders' className='text-white flex justify-center items-center gap-4 bg-green-700 md:w-[300px] md:h-[45px] py-3 mt-8 w-full font-medium rounded-xl hover:bg-green-900'>
              <button >Review Order</button>
              <ArrowLongRightIcon className='w-8 h-8'></ArrowLongRightIcon>
            </Link>
          </Cart>
        </div>
      </div>

      {/* Pegination */}

      <div>
        <div className='my-20 text-center'>
          <p className='my-4 text-xl'> Current Page - {currentpage}</p>
          {
            pages?.map(number => {
             return <button key={number} onClick={() => setCurrentPage(number)}  className='bg-slate-600 p-3 rounded-md mx-3 text-white'>{number}</button>
            })
          }
          <select value={itemsperPage} className='bg-slate-600 py-3 px-2 rounded-md mx-3 text-white' onChange={slectedValue}>
            {
              options.map((num,index) => {
                return <option key={index} value={num}>{num}</option>
              })
            }
          </select>
        </div>
      </div>
    </>
  );
};

export default Shop;