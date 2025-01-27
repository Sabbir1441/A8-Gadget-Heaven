import { NavLink, Link, useLocation } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext, WishlistContext } from "../utilities/context";

const Navbar = () => {
    const { wishlist } = useContext(WishlistContext);
    const { cart } = useContext(CartContext);

    const location = useLocation();
    const isRoot = location.pathname === "/";

    const links = (
        <>
            <li>
                <NavLink to={"/"} className={`${isRoot ? "" : "text-[#9538E2]"}`}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to={"/statistics"} className={`${isRoot ? "" : "text-[#9538E2]"}`}>
                    Statistics
                </NavLink>
            </li>
            <li>
                <NavLink to={"/dashboard"} className={`${isRoot ? "" : "text-[#9538E2]"}`}>
                    Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink to={"/login"} className={`${isRoot ? "" : "text-[#9538E2]"}`}>
                    Login
                </NavLink>
            </li>
        </>
    );

    return (
        <div className={`mx-3 pt-3 lg:px-6 md:mx-4 lg:mx-7 rounded-t-xl ${isRoot ? "bg-[#9538E2] text-white" : "bg-transparent text-[#9538E2]"}`}>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            {links}
                        </ul>
                    </div>
                    <NavLink to={"/"} className={`text-xl font-bold py-2 ${isRoot ? "text-white" : "text-[#9538E2]"}`}>
                        GadgetHeaven
                    </NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{links}</ul>
                </div>
                <div className="navbar-end gap-4">
                    <Link className="text-lg p-2 rounded-full shadow text-black bg-white relative" to={"/dashboard/cart"}>
                        <IoCartOutline />
                        <span className="absolute flex justify-center items-center w-6 h-6 rounded-full -top-3 -right-3 text-sm bg-slate-200">
                            {cart.length}
                        </span>
                    </Link>
                    <Link className="text-lg p-2 rounded-full shadow text-black bg-white relative" to={"/dashboard/wishlist"}>
                        <FaRegHeart />
                        <span className="absolute flex justify-center items-center w-6 h-6 rounded-full -top-3 -right-3 text-sm bg-slate-200">
                            {wishlist.length}
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;