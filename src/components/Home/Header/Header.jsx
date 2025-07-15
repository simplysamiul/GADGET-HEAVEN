import HomeNav from "../HomeNav/HomeNav";
import './Header.css'


const Header = () => {
    return (
        <div className="bg-[#9538E2] m-6 rounded-xl header-area">

            <div className="w-11/12 mx-auto pb-8">
                <HomeNav />
            </div>
            <div>
                <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl w-11/12 md:w-10/12 mx-auto py-4 text-center">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p className="text-gray-100 text-center py-2 text-lg w-10/12 md:w-8/12 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="mx-auto flex justify-center">
                    <button className=" header-shop-btn btn rounded-full bg-white text-[#9538E2] font-bold my-4">Shop Now</button>
                </div>
            </div>

        </div>
    );
};

export default Header;