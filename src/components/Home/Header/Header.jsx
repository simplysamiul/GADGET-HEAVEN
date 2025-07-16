import HomeNav from "../HomeNav/HomeNav";
import bannerImg from '../../../assets/banner.jpg';
import './Header.css'


const Header = () => {
    return (
        <>
            <div className="bg-[#9538E2] m-6 rounded-xl h-[75vh] md:h-[50vh] lg:h-[70vh] header-area ">

                <div className="w-11/12 mx-auto">
                    <HomeNav />
                </div>
                <div>
                    <h1 className="text-white font-bold text-2xl md:text-4xl lg:text-5xl w-11/12 md:w-10/12 mx-auto py-2 text-center">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className="text-gray-100 text-center py-2 text-lg w-10/12 md:w-8/12 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <div className="mx-auto flex justify-center">
                        <button className="header-shop-btn btn rounded-full bg-white text-[#9538E2] font-bold my-2">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
                <div className="w-9/12 lg:w-8/12 mx-auto banner-img relative -mt-36 md:-mt-55 lg:-mt-38 shadow-2xl shadow-white">
                    <img className="rounded-xl w-full h-[300px] md:h-[400px] lg:h-[420px] object-cover" src={bannerImg} alt="" />
                </div>
        </>
    );
};

export default Header;