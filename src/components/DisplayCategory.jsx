import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


const DisplayCategory = ({category}) => {

    return (
        <button className='btn rounded-xl w-full'><NavLink >{category}</NavLink></button>
    );
};


DisplayCategory.propTypes = {
    category: PropTypes.text
};


export default DisplayCategory;