import React, {Component} from 'react';
import {API_URL} from '../../config';
import './table.css'
import Table from './table'
import Loading from '../Common/Loading/loading'
import Pagination from './pagination'

class List extends Component{
    constructor() {
        super()
        this.state = {
            currencies: [],
            loading: false,
            page:1,
            totalPages:0,
            perPage:20,
            error:''
        }
        this.handlePaginationClick = this.handlePaginationClick.bind(this)
    }

    fetchCurrencies() {
        this.setState({
            loading: true
         })
         const{page, perPage}= this.state

        fetch(`${API_URL}/cryptocurrencies/?page=${page}&perPage=${perPage}`)
        .then(resp =>{
            return resp.json().then((data) => {
                if(resp.ok) {
                    return data
                }
                return Promise.reject(data)
            })
        })
        .then(data => {
            const{currencies,totalPages} = data;
            this.setState({
               loading: false,
               currencies,
               totalPages
            })
        })

        .catch((error) => {
            this.setState({
                loading:false,
                error:error.errorMessage
            })
        })

    }

    componentDidMount () {
       this.fetchCurrencies()
    }

    handlePaginationClick(direction) {
        let nextPage =this.state.page;
        nextPage = direction ==='next' ? nextPage +1 : nextPage-1;
        this.setState({
            page:nextPage
        })
        this.fetchCurrencies()
    }

    render() {
        console.log(this.state)
        const { currencies, loading, error,page,totalPages } = this.state;
        if(loading){
            return(
                <div className="loading-container">
                    <h2><Loading/></h2>
                </div>
            )
        }

        if(error){
            return <div className ="error">{error}</div>
        }

        return(
            <div>
                <Table 
                    data={currencies}
                />
                <Pagination
                page={page}
                totalPages={totalPages}
                handlePaginationClick = {this.handlePaginationClick}
                />
            </div>
        )
        
    }
}

export default List

