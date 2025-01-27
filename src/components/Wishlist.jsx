import { useContext } from "react";
import { WishlistContext } from "../utilities/context";
import DisplayWishlistItem from "./DisplayWishlistItem";
import { toast } from "react-toastify";

const Wishlist = () => {
    const { wishlist, setWishlist } = useContext(WishlistContext);


    const handleDeleteItem = (productId) => {
        const newCart = wishlist.filter(product => product.product_id != productId);
        setWishlist(newCart);
        toast.success("Successfully Removed from Wishlist.")
    }

    return (
        <div className="container mx-auto mb-20">
            <div className="flex items-center justify-between container mx-auto ">
                <h3 className="text-xl font-bold">Wishlist</h3>
            </div>


            {/* Wishlist Item */}

            {wishlist.length === 0 ? (
                <div className="text-center min-h-52 flex justify-center items-center">
                    <h2 className="text-4xl font-bold">Nothing in wishlist...</h2>
                </div>
            ) : (
                <div className="space-y-5 mt-5">
                    {
                        wishlist.map((product, idx) => <DisplayWishlistItem key={idx} product={product} handleDeleteItem={handleDeleteItem}></DisplayWishlistItem>)
                    }
                </div>
            )}


        </div>
    );
};

export default Wishlist;