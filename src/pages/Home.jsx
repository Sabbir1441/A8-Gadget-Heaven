import Banner from '../components/Banner';
import Products from '../components/Products';


const Home = () => {


    return (
        <div>
            <Banner></Banner>

            <div className='mt-16'>
                <Products></Products>
            </div>
        </div>
    );
};
export default Home;