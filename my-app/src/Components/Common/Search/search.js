import React from 'react';
import { API_URL } from '../../../config';
import { hendleResponse } from '../../../helpers';
import { withRouter } from 'react-router-dom'
import Loading from '../Loading/loading';
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
        if (searchQuery) {
            fetch(`${API_URL}/autocomplete?searchQuery=${searchQuery}`)
                .then(hendleResponse)
                .then(result => {
                    this.setState({
                        loading: false,
                        searchResults: result
                    })
                })
        }

    }
    hendleRedirect = (currencyId) => {
        this.props.history.push(`/currency/${currencyId}`);
        this.setState({
            searchQuery:'',
            searchResults:[]
        })
    }
    renderSearchResult = () => {
        const { searchResults, searchQuery, loading } = this.state;
        if (!searchQuery) {
            return ''
        }
        if (searchResults.length > 0) {
            return (
                <div className='Search-result-container'>
                    {searchResults.map(item => {
                        return (
                            <div
                                key={item.id}
                                onClick={() => { this.hendleRedirect(item.id) }}
                                className='Search-result'
                            >
                                {item.name}({item.symbol})
                            </div>
                        )
                    })}
                </div>
            )
        }
        if (!loading) {
            return (
                <div className='Search-no-result'>
                    No results found {searchQuery}
                </div>
            )
        }
    }
    render() {
        const { loading, searchQuery } = this.state
        return (
            <div className='Search' >
                <div className=''>
                    <span
                        className='Search-icon'
                    />
                    <input
                        type='text'
                        value={searchQuery}
                        className='Search-input'
                        placeholder='Currency name'
                        onChange={this.handleChange}
                    />
                    {
                        loading && searchQuery && (
                            <div className='Search-loading'>
                                <Loading
                                    width={"15px"}
                                    height={"15px"}
                                />
                            </div>
                        )
                    }
                </div>
                {this.renderSearchResult()}
            </div>
        )
    }
}

export default withRouter(Search);