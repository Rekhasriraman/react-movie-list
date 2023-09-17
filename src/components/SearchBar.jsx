import { useState } from "react";
import PropTypes from 'prop-types';
import './SearchBar.css';





const SearchBar = ({getInput}) => {
    const [value, setValue] = useState('');
    const changeInputHandler = (e) => {
        const val = e.target.value.toLowerCase();
        setValue(val);
        getInput(val);
    };
    return (
        <div className='search-bar-container'>
            <input 
            type='text' 
            className='search-input' 
            placeholder="Enter the movie name" 
            value={value} 
            onChange={(e) =>changeInputHandler(e)}
            />
            <div className='search-icon'>🔍</div>
        </div>
    );
};

SearchBar.propTypes = {
    getInput: PropTypes.func.isRequired
};

export default SearchBar;