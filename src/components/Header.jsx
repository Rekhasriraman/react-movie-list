import PropTypes from 'prop-types';
import './Header.css';
import { BiSolidCameraMovie } from 'react-icons/bi';
import { MdLocalMovies } from 'react-icons/md';


const Header = ({ text }) => {
    return (
        <header className='header'>
            <h2 className='heading'>{text} <BiSolidCameraMovie className='icon' /><MdLocalMovies className='icon2'/></h2>
        </header>
    );
};

Header.propTypes = {
    text: PropTypes.string.isRequired
};

export default Header;