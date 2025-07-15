import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {product_id} = useParams();
    console.log(product_id)
    return (
        <div>
            <h1 className='text-4xl font-bold my-8 text-center'>This is product details page </h1>
        </div>
    );
};

export default ProductDetails;