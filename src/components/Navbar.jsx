import { NavLink, Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";


const Navbar = () => {

    const links = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/statistics"}>Statistics</NavLink></li>
        <li><NavLink to={"/dashboard"}>Dashboard</NavLink></li>
    </>

    return (
        <div className="mx-3 mt-3 md:mt-4 lg:mt-7 md:mx-4 lg:mx-7 rounded-t-xl bg-[#9538E2]">
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
                    <NavLink to={"/"} className="text-xl font-bold py-2">GadgetHeaven</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <Link className="text-2xl p-2 rounded-full shadow text-black bg-white relative" to={"/cart"}><IoCartOutline /><span className="absolute flex justify-center items-center w-7 h-7 rounded-full -top-3 -right-3 text-lg bg-slate-200">0</span></Link>
                    <Link className="text-2xl p-2 rounded-full shadow text-black bg-white relative" to={"/cart"}><FaRegHeart /><span className="absolute flex justify-center items-center w-7 h-7 rounded-full -top-3 -right-3 text-lg bg-slate-200">0</span></Link>
                </div>
            </div>
            </div>
            );
};
            export default Navbar;