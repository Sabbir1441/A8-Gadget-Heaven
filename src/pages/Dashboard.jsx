
import "react-tabs/style/react-tabs.css";

import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
    const navigate = useNavigate()
    useEffect(() => {
        navigate("/dashboard/cart")
    }, [navigate]);

    return (
        <div>
            <Helmet>
                <title>Dashboard | Get your desired gadget</title>
            </Helmet>
            <div className="bg-[#9538E2] py-8 mb-7">
                <div className="text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">Dadshboard</h2>
                    <p className="max-w-[600px] mx-auto">
                        Explore the latest gadgets that will take your experience to the
                        next level. From smart devices to the coolest accessories, we have
                        it all!
                    </p>
                    <div id="cart-wishlist" className="space-x-5 mt-5">

                        <NavLink className="btn px-12 rounded-full btn-outline text-white" to={"/dashboard/cart"}>Cart</NavLink>

                        <NavLink className="btn px-12 rounded-full btn-outline text-white" to={"/dashboard/wishlist"}>Wishlist</NavLink>
                    </div>
                </div>
            </div>

            <Outlet></Outlet>

        </div>
    );
};


export default Dashboard;