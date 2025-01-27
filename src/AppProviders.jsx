import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { WishlistContext } from "./utilities/context";
import { CartContext } from "./utilities/context";
import { DataContext } from "./utilities/context";
import { CategoryContext } from "./utilities/context";

const AppProviders = ({ children }) => {
    const [data, setData] = useState([]);
    const [categories, setCategories] = useState({});
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        fetch("/deviceData.json")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    useEffect(() => {
        fetch("/categories.json")
            .then((res) => res.json())
            .then((categories) => setCategories(categories));
    }, []);

    return (
        <WishlistContext.Provider value={{ wishlist, setWishlist }}>
            <CartContext.Provider value={{ cart, setCart }}>
                <DataContext.Provider value={data}>
                    <CategoryContext.Provider value={categories}>
                        {children}
                    </CategoryContext.Provider>
                </DataContext.Provider>
            </CartContext.Provider>
        </WishlistContext.Provider>
    );
};

AppProviders.propTypes = {
    children: PropTypes.array,
};

export default AppProviders;