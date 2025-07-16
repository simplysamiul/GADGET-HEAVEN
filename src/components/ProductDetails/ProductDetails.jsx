import { useLoaderData, useParams } from 'react-router-dom';
import './ProductDetails.css';

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
                        <p className='text-center my-2 text-gray-200 w-8/12 mx-auto '>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    </div>
                </div>
            </div>
            <div>
                {/* product details */}
                <div className='w-8/12 mx-auto flex gadget-details-container items-center gap-4'>
                    <div className='w-8/12'>
                        <img className='w-full' src={product_image} alt={`${product_title}-img`} />
                    </div>
                    <div className='w-full'>
                        <h2>{product_title}</h2>
                        <p>Price : {price} $</p>
                        <p>Category : {category}</p>
                        {availability
                            ?
                            <div class="badge badge-soft badge-success">In Stock</div>
                            :
                            <div class="badge badge-soft badge-error">Stock Out</div>
                        }
                        <p>{description}</p>
                        <div>
                            <h5>Specification:</h5>
                            {
                                specification.map((item, idx) => <ol key={idx}>{idx + 1}. {item}</ol>)
                            }
                        </div>
                        <h5>Rating : <span>{rating}</span></h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;