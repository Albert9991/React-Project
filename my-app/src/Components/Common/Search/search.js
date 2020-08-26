import React from 'react';
import { API_URL } from '../../../config';
import { hendleResponse } from '../../../helpers';
import './search.css';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            searchQuery: '',
            searchResults: [],
            loading: false
        }
    }
    handleChange = (e) => {
        const searchQuery = e.target.value
        this.setState({
            loading: true,
            searchQuery
        })
        fetch(`${API_URL}/autocomplete?searchQuery=${searchQuery}`)
            .then(hendleResponse)
            .then(result => {
                this.setState({
                    loading: false,
                    searchResults: result
                })
            })

    }
    renderSearchResult = () => {
        const { searchResults, searchQuery, loading } = this.state;
        if (searchResults.length > 0) {
            return (
                <div className='Search-result-container'>
                    {searchResults.map(item => {
                        return (
                            <div 
                                key={item.id}
                                // onClick={() => {history.push(`/currency/${item.id}`)}}
                                className='Search-result'
                            >
                                {item.name}({item.symbol})
                            </div>
                        )
                    })}
                </div>
            )
        }
        if(!loading){
            return (
                <div className='Search-no-result'>
                    No results found {searchQuery}
                </div>
            )
        }
    }
    render() {
        console.log("Search -> constructor -> this.state", this.state)
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
                        onChange={this.handleChange}
                    />
                </div>
                {this.renderSearchResult()}
            </div>
        )
    }
}

export default Search;