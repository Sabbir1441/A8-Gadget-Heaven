
import { Helmet } from 'react-helmet-async';
import Banner from '../components/Banner';
import Products from '../components/Products';

const Home = () => {

    return (
        <div>
            <Helmet>
                <title>GadgetHeaven | The Ultimate Gadget Destination</title>
            </Helmet>
            <Banner></Banner>
            <div className='mt-16'>
                <Products></Products>
            </div>
        </div>
    );
};

export default Home;