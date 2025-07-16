import { Link } from 'react-router-dom';
import './Gadget.css';
import Button from '../../../shared/Button/Button';

const Gadget = ({ gadget }) => {
    const { product_title, product_image, price, product_id } = gadget;
    return (
        <div className='gadget-cart-container border-1 border-[#9538e257] rounded-xl p-4 flex flex-col justify-between'>
            <Link to={`/product-details/${product_id}`}>
                <img className='h-42 object-contain mx-auto p-4 gadget-img' src={product_image} alt={product_title} />
            </Link>
            <h1 className='font-bold text-base md:text-sm lg:text-lg mb-0'>{product_title}</h1>
            <p className='my-1 text-sm'>Price : {price} $</p>
            <div className='duration-100 details-btn block'>
                <Link to={`/product-details/${product_id}`}>
                    <Button>View Details</Button>
                </Link>
            </div>
        </div>
    );
};

export default Gadget;