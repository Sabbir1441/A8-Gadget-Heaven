import { NavLink } from 'react-router-dom';


const DisplayCategory = ({category}) => {

    return (
        <button className='btn rounded-xl w-full'><NavLink >{category}</NavLink></button>
    );
};
export default DisplayCategory;