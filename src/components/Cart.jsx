import { useContext, useState } from "react";
import { FaSortAmountDown } from "react-icons/fa";
import { CartContext } from "../utilities/context";
import DisplayCartItem from "./DisplayCartItem";
import { toast } from "react-toastify";
import Badge from "../assets/Group.png";

const Cart = () => {
    const { cart, setCart } = useContext(CartContext);
    const [isSorted, setIsSorted] = useState(false);

    let price = 0;
    for (const product of cart) {
        price += product.price;
    }

    const sortedCart = isSorted ? [...cart].sort((a, b) => b.price - a.price) : cart;


    const handleDeleteItem = (productId) => {
        const newCart = cart.filter((product) => product.product_id != productId);
        setCart(newCart);
        toast.success("Successfully Removed from Cart.");
    };

    const handlePurchaseBtn = () => {
        console.log(price, "purchased");
        document.getElementById("my_modal_5").showModal();
    };
    const handleClearCart = () => {
        setCart([]);
    };

    const toggleSortByPrice = () => {
        setIsSorted(!isSorted);
    }

    return (
        <div className="container mx-auto mb-20">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Cart</h3>
                <div className="flex items-center gap-5">
                    <h3 className="text-xl font-bold">
                        Total cost: <span className="text-[#9538E2]">{price}</span> $
                    </h3>
                    <button onClick={toggleSortByPrice} className="btn btn-outline text-[#9538E2] border-[#9538E2] rounded-full">
                        {isSorted ? 'Sort by Default' : 'Sort by Price'} <FaSortAmountDown />
                    </button>
                    <button
                        onClick={handlePurchaseBtn}
                        className={`btn text-white bg-gradient-to-b from-[#9538E2] to-[#e238e2] rounded-full ${price === 0 ? "btn-disabled" : ""
                            }`}
                    >
                        Purchase
                    </button>
                </div>
            </div>

            {/* Cart Item */}

            {cart.length === 0 ? (
                <div className="text-center min-h-52 flex justify-center items-center">
                    <h2 className="text-4xl font-bold">Nothing in cart...</h2>
                </div>
            ) : (
                <div className="space-y-5 mt-5">
                    {sortedCart.map((product, idx) => (
                        <DisplayCartItem
                            key={idx}
                            product={product}
                            handleDeleteItem={handleDeleteItem}
                        />
                    ))}
                </div>
            )}

            {/* Modal */}

            <dialog id="my_modal_5" className="modal sm:modal-middle">
                <div className="modal-box">
                    <div className=" flex flex-col justify-center items-center">
                        <img src={Badge} alt="" />
                        <h3 className="font-bold text-2xl mt-4">Payment Successfull!</h3>
                        <hr className="border-gray-400 w-full my-5" />
                        <p>Thanks for purchasing.</p>
                        <p>Total: ${price}</p>
                    </div>
                    <div className="modal-action">
                        <form className="w-full" method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button onClick={handleClearCart} className="btn w-full rounded-full bg-gray-300">
                                Close
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Cart;