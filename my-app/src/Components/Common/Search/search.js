import React from 'react';
import './search.css';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div className='Search' >
                <div className=''>
                    <span 
                        className='Search-icon'
                    />
                    <input
                        type='text'
                        className='Search-input'
                        placeholder='Currency name'
                    />
                </div>
            </div>
        )
    }
}

export default Search;