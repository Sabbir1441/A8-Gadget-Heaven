import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { DataContext, LoadingContext } from "../utilities/context";



const ProductDetails = () => {


    const { productId } = useParams();

    const data = useLoaderData()

    const [loading, setLoading] = useState(true);
    const product = data.find(product => product.product_id == productId);
    const { product_image, product_title, category, price, description, Specification, availability, rating, warranty_period } = product;


    return (
        <>
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
            <div className="bg-white rounded-xl -mt-40 p-5 container mx-auto flex gap-5">
                <figure className="flex-1">
                    <img className="rounded-xl" src={product_image} alt={product_title} />
                </figure>
                <div className="space-y-4 flex-1">
                    <h2 className="text-2xl font-bold">{product_title}</h2>
                    <p>Price: $ {price}</p>
                    <button className="btn btn-sm btn-outline">{availability ? "In Stock" : "Out of Stock"}</button>
                    <p>{description}</p>
                    <p className="font-bold">Specification:</p>
                    <ol>
                        {
                            Specification.map((specs, idx) => <li key={idx}>{specs}</li>)
                        }
                    </ol>
                    <span className="font-bold">Rating:</span>
                    <button className="btn btn-sm">{rating}</button>
                    <br />
                    <button className="btn rounded-full">Add To Cart</button>
                </div>
            </div>
        </>
    );
};
export default ProductDetails;