import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { CategoryContext, DataContext } from "../utilities/context";
import Footer from "../components/Footer";



const Root = () => {
    const [data, setData] = useState([]);
    const [categories, setCategories] = useState({});
    useEffect(() => {
        fetch("deviceData.json")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);
    useEffect(() => {
        fetch("categories.json")
            .then((res) => res.json())
            .then((categories) => setCategories(categories));
    }, []);
    return (
        <div>

            <CategoryContext.Provider value={categories}>
                <DataContext.Provider value={data}>
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </DataContext.Provider>
            </CategoryContext.Provider>
        </div>
    );
};
export default Root;