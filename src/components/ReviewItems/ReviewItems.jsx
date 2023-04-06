import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'

const ReviewItems = ({product,deleteItem}) => {
    return (
        <>
            <div className='md:w-[571px] md:h-[107px] border-2 border-gray-300 rounded-lg mb-5'>
                <div className='flex flex-col md:flex-row md:items-center justify-between px-2 gap-5'>
                    <div className='flex gap-3 items-center mt-2'>
                        <div>
                            <img className='w-[91px] h-[91px]' src={product.img} alt="" />
                        </div>
                        <div>
                            <p className='font-semibold'>{product.name}</p>
                            <p>Price : <span className='text-yellow-500 font-medium'>${product.price}</span></p>
                            <p>Quantity : <span className='text-yellow-500 font-medium'>{product.quantity}</span></p>
                        </div>
                    </div>

                    <div onClick={() => deleteItem(product.id)} className='md:bg-red-200 p-3 rounded-full cursor-pointer hover:bg-red-300 flex justify-center items-center'>
                        <TrashIcon className="h-6 w-6 text-red-500 " />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReviewItems;