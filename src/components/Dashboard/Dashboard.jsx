import { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
    const [btnActive, setActive] = useState(false);
    const handelcartBtn = () =>{

    }
    const handelWishBtn = () =>{

    }
    return (
        <div>
            <div className='bg-[#9538E2] py-15 mb-10'>
                <div className='w-11/12 mx-auto text-center'>
                    <h1 className='font-bold text-3xl text-white mb-4'>Dashboard</h1>
                    <p className='text-gray-200 w-11/12 md:w-8/12 lg:w-6/12 mx-auto '>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
                <div className='flex items-center justify-center my-4 gap-4'>
                    <button onClick={handelcartBtn} className='btn rounded-full cart-btn font-bold text-[#9538E2] border-1 border-white'>CartList</button>
                    <button onClick={handelWishBtn} className='btn rounded-full wish-btn font-bold text-white border-1 border-white btn-active'>WishList</button>
                </div>
            </div>
            
        </div>
    );
};

export default Dashboard;