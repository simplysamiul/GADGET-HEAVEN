import { useEffect, useState } from 'react';
import './Dashboard.css';
import { getItems } from '../../utilities/localStorage';
import { useLoaderData } from 'react-router-dom';
import { IoCloseCircleSharp } from 'react-icons/io5';

const Dashboard = () => {
    // loadded all of the gadegets data
    const data = useLoaderData();
    // set swap button design state
    const [btnActive, setActive] = useState(true);

    // called state for car and wish list data 
    const [cardData, setCardData] = useState([]);
    const [wishData, setWishData] = useState([]);

    // swap data as par the card and wish button
    let loadedDataList;
    { btnActive === true ? loadedDataList = cardData : loadedDataList = wishData };

    // loaded data from localstorage that is added in car list and wish list
    useEffect(() => {
        const cardList = getItems("cart");
        const cardListData = data.filter(item => cardList.includes(item.product_id));
        setCardData(cardListData);
        const wishList = getItems("wish");
        const wishListData = data.filter(item => wishList.includes(item.product_id))
        setWishData(wishListData)
    }, [data]);

    return (
        <div>
            <div className='bg-[#9538E2] py-15 mb-10'>
                <div className='w-11/12 mx-auto text-center'>
                    <h1 className='font-bold text-3xl text-white mb-4'>Dashboard</h1>
                    <p className='text-gray-200 w-11/12 md:w-8/12 lg:w-6/12 mx-auto '>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
                <div className='flex items-center justify-center my-4 gap-4'>
                    <button onClick={() => setActive(true)} className={`btn rounded-full cart-btn font-bold text-[#9538E2] border-1 border-white ${!btnActive && "btn-active"}`}>CartList</button>
                    <button onClick={() => setActive(false)} className={`btn rounded-full wish-btn font-bold border-1 border-white text-[#9538E2] ${btnActive && "btn-active"}`}>WishList</button>
                </div>
            </div>

            {/* dashboard content */}
            <div className='w-11/12 mx-auto'>
                <div>
                    {
                        loadedDataList.map(item => <div
                            key={item.product_id}
                            className='flex items-center justify-between border-1 rounded-xl border-gray-200 py-2 px-4 mb-4 '
                        >
                            <div className='flex gap-6 items-center'>
                                <div>
                                    <img className='w-[60px]' src={item.product_image} alt="" />
                                </div>
                                <div>
                                    <h3 className='font-bold mb-1 text-xl'>{item.product_title}</h3>
                                    <p className='text-xs text-gray-400 mb-2'>{item.description}</p>
                                    <h5 className='font-bold'>Prie : {item.price} $</h5>
                                </div>
                            </div>
                            <div>
                                <IoCloseCircleSharp
                                // onClick={() =>} 
                                className='text-red-500 text-2xl hover:cursor-pointer' 
                                />
                            </div>
                        </div>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Dashboard;