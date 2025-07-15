import { SiEngadget } from "react-icons/si";

const Footer = () => {
    return (
        <footer className="w-11/12 mx-auto border-t-2 border-gray-200 mt-8">
                <div className="mx-auto my-4">
                    <h1 className="font-bold text-3xl text-black text-center mb-2">Gadget Heaven</h1>
                    <p className="text-center text-gray-400">Leading the way in cutting-edge technology and innovation.</p>
                </div>
            <div className="footer sm:footer-horizontal p-10 justify-center">
                <nav className="mx-18">
                    <h6 className="footer-title font-bold text-black">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav className="mx-18">
                    <h6 className="footer-title font-bold text-black">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                </nav>
                <nav className="mx-18">
                    <h6 className="footer-title font-bold text-black">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;