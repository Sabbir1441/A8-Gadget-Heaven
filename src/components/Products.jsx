import DisplayCategory from "./DisplayCategory";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CategoryContext, DataContext } from "../utilities/context";
import Product from "./Product";

const Products = () => {
    let products = useContext(DataContext);
    const categories = useContext(CategoryContext);
    const categoriesArr = categories.categories;

    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const filteredProducts =
        selectedCategory === "All"
            ? products
            : products.filter((product) => product.category === selectedCategory);

    products = filteredProducts;
    return (
        <div id="products" className="container mx-auto">
            <h3 className="text-center font-bold text-3xl">
                Explore Cutting-Edge Gadgets
            </h3>
            <div className="my-8 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-5">
                <div>
                    <div
                        id="category-item"
                        className="bg-white p-5 rounded-xl flex flex-col gap-5"
                    >
                        <Link
                            className={`btn rounded-xl w-full ${selectedCategory === "All" ? "active" : ""
                                }`}
                            onClick={() => handleCategoryClick("All")}
                        >
                            All Products
                        </Link>
                        {categoriesArr &&
                            categoriesArr.map((category, idx) => (
                                <DisplayCategory
                                    key={idx}
                                    category={category}
                                    isActive={selectedCategory === category}
                                    handleCategoryClick={handleCategoryClick}
                                ></DisplayCategory>
                            ))}
                    </div>
                </div>
                <div className="md:col-span-3 lg:col-span-4 grid grid-cols-1 md:grid-cols-3 gap-5">
                    {
                        products.length === 0 ? (
                            <div className="min-h-52 flex flex-col justify-center items-center">
                                <h2 className="text-3xl font-bold">Oops!...</h2>
                                <p className="text-gray-500">No product for this category.</p>
                            </div>
                        ) : (
                            products.map((product) => (
                                <Product key={product.product_id} product={product}></Product>
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;