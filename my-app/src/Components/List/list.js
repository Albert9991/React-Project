import React, { Component } from 'react';
import { API_URL } from '../../config';
import Loading from '../Common/Loading/loading';
import Table from './table';
import Pagination from './pagination';
import './table.css';
import { hendleResponse } from '../../helpers';
class List extends Component {
    constructor() {
        super();
        this.state = {
            currencies: [],
            loading: false,
            page: 1,
            totalPages: 0,
            perPage: 20,
            error: ''
        };
        this.handlePaginationClick = this.handlePaginationClick.bind(this);
    };

    fetchCurencis() {
        this.setState({
            loading: true
        })
        const { page, perPage } = this.state

        fetch(`${API_URL}/cryptocurrencies/?page=${page}&perPage=${perPage}`)
            .then(resp => hendleResponse(resp))
            .then(data => {
                const { currencies, totalPages } = data;
                this.setState({
                    loading: false,
                    currencies,
                    totalPages
                })
            }
            )
            .catch((error) => {
                this.setState({
                    loading: false,
                    error: error.errorMessage
                })
            })
    }

    componentDidMount() {
        this.fetchCurencis();
    }

    handlePaginationClick(direction) {
        let nextPage = this.state.page;
        nextPage = direction === 'next' ? nextPage + 1 : nextPage - 1;
        this.setState({
            page: nextPage
        }, this.fetchCurencis)
    }
    render() {
        const { currencies, loading, error, page, totalPages } = this.state;
        if (error) {
            return (
                <div className="error">{error}</div>
            )
        }
        if (loading) {
            return (
                <div className="loading-contanier">
                    <Loading />
                </div>
            )
        }

        return (
            <div >
                <Table
                    data={currencies}
                />
                <Pagination
                    page={page}
                    totalPages={totalPages}
                    handlePaginationClick={this.handlePaginationClick}
                />
            </div>
        )
    };
};

export default List;