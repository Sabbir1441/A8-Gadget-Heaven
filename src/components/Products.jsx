
import { NavLink } from "react-router-dom";
import DisplayCategory from "./DisplayCategory"
import { useContext, useState } from "react";
import { CategoryContext, DataContext, LoadingContext } from "../utilities/context";
import Product from "./Product";



const Products = () => {
    const { loading } = useContext(LoadingContext)
    const products = useContext(DataContext);
    const categories = useContext(CategoryContext);
    const categoriesArr = categories.categories;

    if (loading) {
        return <h1 className="text-center text-7xl">Loading...</h1>
    }

    return (
        <div className="container mx-auto">
            <h3 className="text-center font-bold text-3xl">
                Explore Cutting-Edge Gadgets
            </h3>
            <div className="my-8 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-5">
                <div>
                    <div className="bg-white p-5 rounded-xl flex flex-col gap-5">
                        <button className='btn rounded-xl w-full'><NavLink >All Products</NavLink></button>
                        {categoriesArr &&
                            categoriesArr.map((category, idx) => <DisplayCategory key={idx} category={category}></DisplayCategory>)}
                    </div>
                </div>
                <div className="md:col-span-3 lg:col-span-4 grid grid-cols-1 md:grid-cols-3 gap-5">
                    {
                        products.map(product => <Product key={product.product_id} product={product}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};
export default Products;