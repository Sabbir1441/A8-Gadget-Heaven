
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DisplayCategory = ({ category, handleCategoryClick, isActive }) => {
    return (
        <Link onClick={() => handleCategoryClick(category)} className={`btn rounded-xl w-full ${isActive ? 'active' : ''}`} >{category}</Link>
    );
};

DisplayCategory.propTypes = {
    category: PropTypes.string.isRequired,
    handleCategoryClick: PropTypes.func,
    isActive: PropTypes.bool
};


export default DisplayCategory;


