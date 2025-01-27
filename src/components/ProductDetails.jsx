import StarRatings from "react-star-ratings";
import { useLoaderData, useParams } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { useContext, useState } from "react";
import { CartContext, WishlistContext } from "../utilities/context";
import { toast } from 'react-toastify';
import { Helmet } from "react-helmet-async";

const ProductDetails = () => {
    const { productId } = useParams();
    const data = useLoaderData();

    const { wishlist, setWishlist } = useContext(WishlistContext);
    const { cart, setCart } = useContext(CartContext);

    const [WishListed, setWishListed] = useState(false);

    const product = data.find((product) => product.product_id == productId);

    if (!product) {
        return <p>Product not found.</p>;
    }

    const {
        product_id,
        product_image,
        product_title,
        price,
        description,
        Specification,
        availability,
        rating,
    } = product;

    const handleAddCart = () => {
        if (cart.find(product => product.product_id == productId)) {
            toast.error(`${product.product_title} already in cart.`)
            return;
        }
        const newCart = [...cart, product]
        setCart(newCart);
        toast.success(`${product.product_title} added to cart successfully.`)
    };

    const handleAddWishlist = (productId) => {
        if (wishlist.find(product => product.product_id == productId)) {
            toast.error(`${product.product_title} already in wishlist.`)
            setWishListed(true)
            return;
        }
        const newWishlist = [...wishlist, product]
        setWishlist(newWishlist);
        // document.getElementById('wishlist-btn').classList.add('btn-disabled')
        setWishListed(true);
        toast.success(`${product.product_title} added to wishlist successfully.`)
    };



    return (
        <>
            <Helmet>
                <title>{product_title}</title>
            </Helmet>
            <div className="bg-[#9538E2] pt-8 pb-48">
                <div className="text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">Product Details</h2>
                    <p className="max-w-[600px] mx-auto">
                        Explore the latest gadgets that will take your experience to the
                        next level. From smart devices to the coolest accessories, we have
                        it all!
                    </p>
                </div>
            </div>
            <div className="bg-white rounded-xl -mt-40 mb-20 px-5 py-10 container mx-auto flex gap-5">
                <figure className="flex-1">
                    <img className="rounded-xl" src={product_image} alt={product_title} />
                </figure>
                <div className="space-y-4 flex-1">
                    <h2 className="text-2xl font-bold">{product_title}</h2>
                    <p>Price: $ {price}</p>
                    <button
                        className={`btn btn-sm btn-outline rounded-full cursor-default hover:bg-none ${availability
                                ? "text-green-600 border-green-600"
                                : "text-red-600 border-red-600"
                            }`}
                    >
                        {availability ? "In Stock" : "Out of Stock"}
                    </button>
                    <p className="text-gray-500">{description}</p>
                    <p className="font-bold">Specification:</p>
                    <ol className="list-decimal text-gray-500 ml-5">
                        {Specification.map((specs, idx) => (
                            <li key={idx}>{specs}</li>
                        ))}
                    </ol>
                    <div className="flex items-center gap-3">
                        <p className="font-bold">Rating: </p>
                        <span>
                            <StarRatings
                                rating={rating}
                                starRatedColor="gold"
                                numberOfStars={5}
                                name="rating"
                                starDimension="30px"
                                starSpacing="5px"
                            />
                        </span>
                        <button className="btn btn-sm"> {rating}</button>
                    </div>
                    <div className="space-x-3">
                        <button onClick={handleAddCart} className={`btn bg-[#9538E2] px-6 text-white rounded-full ${availability || 'btn-disabled'}`}>
                            Add To Cart <FaCartPlus />
                        </button>
                        <button onClick={() => handleAddWishlist(product_id)} className={`btn bg-white border border-black text-black rounded-full ${WishListed && 'btn-disabled'}`}>
                            <FaRegHeart />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;