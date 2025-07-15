import React from 'react';
import { Link } from 'react-router-dom';

const Gadget = ({ gadget }) => {
    const { product_title, product_image, price, product_id } = gadget;
    return (
        <div className='border-1 border-[#9538e257] rounded-xl p-4 flex flex-col justify-between'>
            <img className='h-42 object-contain mx-auto p-4' src={product_image} alt={product_title} />
            <h1 className='font-bold text-xl'>{product_title}</h1>
            <p className='my-2'>Price : {price} $</p>
            <div className='duration-100'>
                <Link to={`/product-details/${product_id}`}>
                    <button className='btn rounded-full text-[#9538E2] font-bold border-1 border-[#9538E2] hover:bg-[#9538E2] hover:text-white'>View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Gadget;