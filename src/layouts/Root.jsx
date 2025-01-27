import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import {
    CategoryContext,
    DataContext,
    LoadingContext,
} from "../utilities/context";



const Root = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [categories, setCategories] = useState({});


    useEffect(() => {
        fetch("/deviceData.json")
            .then((res) => res.json())
            .then((data) => setData(data));
        setLoading(false)
    }, []);

    useEffect(() => {
        fetch("/categories.json")
            .then((res) => res.json())
            .then((categories) => setCategories(categories));
        setLoading(false)
    }, []);

    console.log(data)
    console.log(categories)

    return (
        <div>

            <LoadingContext.Provider value={{ loading, setLoading }}>
                <DataContext.Provider value={data}>
                    <CategoryContext.Provider value={categories}>
                        <Navbar></Navbar>
                        <Outlet></Outlet>
                        <Footer></Footer>
                    </CategoryContext.Provider>
                </DataContext.Provider>
            </LoadingContext.Provider>
        </div>
    );
};
export default Root;