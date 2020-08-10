import React, {Component} from 'react';
import {API_URL} from '../../config';
import './table.css'
import Table from './table'
import Loading from '../Common/Loading/loading'

class List extends Component{
    constructor() {
        super()
        this.state = {
            currencies: [],
            loading: false,
            error:''
        }
    }

    componentDidMount () {
        this.setState({
            loading: true
         })
        fetch(`${API_URL}/cryptocurrencies/?page=1&perPage=10`)
        .then(resp =>{
            return resp.json().then((data) => {
                if(resp.ok) {
                    return data
                }
                return Promise.reject(data)
            })
        })
        .then(data => {
            const{currencies} = data;
            this.setState({
               loading: false,
               currencies
            })
        })

        .catch((error) => {
            this.setState({
                loading:false,
                error:error.errorMessage
            })
        })
    }

    render() {
        const { currencies, loading, error } = this.state;
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
            <div><Table data={currencies}/></div>
        )
        
    }
}

export default List

