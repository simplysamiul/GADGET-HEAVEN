import { useLoaderData, useParams } from 'react-router-dom';
import './ProductDetails.css';
import Button from '../../shared/Button/Button';

const ProductDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const item = data.find(item => id === item.product_id);
    const { category, description, price, product_id, product_image, product_title, rating, specification, availability } = item;
    return (
        <div>
            <div className='bg-[#9538E2] h-[50vh]'>
                <div className='w-11/12 mx-auto flex items-start justify-center h-full pt-10'>
                    <div>
                        <h1 className='text-4xl text-white font-bold text-center'>Product Details</h1>
                        <p className='text-center my-2 text-gray-200 w-11/12 lg:w-8/12 mx-auto '>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    </div>
                </div>
            </div>
            <div>
                {/* product details */}
                <div v className=' w-11/12 lg:w-8/12 mx-auto flex flex-col lg:flex-row gadget-details-container items-center gap-4 z-10 relative'>
                    <div className='w-8/12'>
                        <img className='w-full' src={product_image} alt={`${product_title}-img`} />
                    </div>
                    <div className='w-full'>
                        <h2 className='text-2xl lg:text-3xl font-bold mb-3'>{product_title}</h2>
                        <p className='mb-2 text-xl font-bold'>Price : {price} $</p>
                        <p className='font-semibold mb-2'>Category : {category}</p>
                        {availability
                            ?
                            <div class="badge badge-soft badge-success my-2 font-bold">In Stock</div>
                            :
                            <div class="badge badge-soft badge-error my-2 font-bold">Stock Out</div>
                        }
                        <p className='mb-2'><span className='text-sm font-bold'>Description : </span>{description}</p>
                        <div className='mb-3'>
                            <h5 className='font-bold'>Specification:</h5>
                            <div className='flex flex-col lg:flex-row lg:gap-5 my-2'>
                                {
                                    specification.map((item, idx) => <ol key={idx}>{idx + 1}. {item}</ol>)
                                }
                            </div>
                        </div>
                        <h5 className='font-bold text-lg'>Rating : <span>{rating}</span></h5>
                        <div className='my-6 flex gap-4'>
                            <button className='add-cart-btn'>Add to Cart</button>
                            <Button>Wish List</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;