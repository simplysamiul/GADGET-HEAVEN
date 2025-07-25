import { CiHeart } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";
import { SiEngadget } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css';
import { getItems } from "../../utilities/localStorage";

const Navbar = () => {
        const cart = getItems("cart");
        const wish = getItems("wish");
    return (
        <div className="bg-base-100 shadow ">
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                        </ul>
                    </div>
                    <Link tp="/">
                        <SiEngadget className="text-2xl text-[#9538E2]" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/statistics">Statistics</NavLink></li>
                        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end flex items-center text-2xl font-bold">
                    {/* cart list */}
                    <div className="relative">
                        {cart.length ? <span
                            className="text-[10px] bg-[#9538E2] p-1 text-white rounded-full object-fill absolute -top-2 right-0">
                            {cart.length}
                        </span> : ""}
                        <GiShoppingCart className="border-1 border-gray-300 rounded-full p-0.5 mx-2" />
                    </div>
                    {/* wish list */}
                    <div className="relative">
                        {wish.length ? <span
                            className="text-[10px] bg-[#9538E2] p-1 text-white rounded-full object-fill absolute -top-2 right-0">{wish.length}
                        </span> : ""}
                        <CiHeart className="border-1 border-gray-300 rounded-full p-0.5 mx-2" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;