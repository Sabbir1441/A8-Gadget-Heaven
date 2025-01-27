import { RxCrossCircled } from "react-icons/rx";
import PropTypes from "prop-types";
import { FaCartPlus } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "../utilities/context";
import { toast } from 'react-toastify';

const DisplayWishlistItem = ({ product, handleDeleteItem }) => {
    const { product_id, product_image, product_title, description, price } = product;

    const { cart, setCart } = useContext(CartContext);

    const handleAddCart = () => {
        if (cart.find(product => product.product_id == product_id)) {
            toast.error(`${product.product_title} already added to cart.`);
            handleDeleteItem(product_id)
            return;
        }

        const newCart = [...cart, product];
        setCart(newCart);
        toast.success(`${product.product_title} moved to cart successfully.`);
        handleDeleteItem(product_id)
    };


    return (
        <div className="bg-white p-5 rounded-xl flex justify-between items-start">
            <div className="flex gap-5">
                <img
                    className="w-72 h-full rounded-xl"
                    src={product_image}
                    alt={product_title}
                />
                <div className="space-y-3">
                    <h2 className="text-2xl font-bold">{product_title}</h2>
                    <p className="text-gray-600">{description}</p>
                    <h4 className="text-lg font-bold">Price: $ {price}</h4>
                    <button
                        onClick={handleAddCart}
                        className="btn bg-[#9538E2] px-6 text-white rounded-full"
                    >
                        Add To Cart <FaCartPlus />
                    </button>
                </div>
            </div>
            <button onClick={() => handleDeleteItem(product_id)}>
                <RxCrossCircled className="text-red-600 text-5xl" />
            </button>
        </div>
    );
};

DisplayWishlistItem.propTypes = {
    product: PropTypes.object,
    handleDeleteItem: PropTypes.func
};

export default DisplayWishlistItem;