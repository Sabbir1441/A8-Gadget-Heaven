import { RxCrossCircled } from "react-icons/rx";

import PropTypes from 'prop-types';

const DisplayCartItem = ({ product, handleDeleteItem }) => {
    const { product_id, product_image, product_title, description, price } = product;



    return (
        <div className='bg-white p-5 rounded-xl flex justify-between items-start'>
            <div className="flex gap-5">
                <img className="w-52 h-full rounded-xl" src={product_image} alt={product_title} />
                <div className="space-y-3">
                    <h2 className="text-2xl font-bold">{product_title}</h2>
                    <p className="text-gray-600">{description}</p>
                    <h4 className="text-lg font-bold">Price: $ {price}</h4>
                </div>
            </div>
            <button onClick={() => handleDeleteItem(product_id)}><RxCrossCircled className="text-red-600 text-5xl" /></button>
        </div>
    );
};

DisplayCartItem.propTypes = {
    product: PropTypes.object,
    handleDeleteItem: PropTypes.func,
    cart: PropTypes.array
};

export default DisplayCartItem;