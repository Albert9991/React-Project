import React, {Component} from 'react';
import {API_URL} from '../../config';
import { renderChangePercent } from '../../helpers';
import Loading from '../Common/loading';
import './table.css';

class List extends Component {
    constructor() {
        super();
        this.state = {
            currencies: [],
            loading: false,
            error: ''
        };
    };

    componentDidMount(){
        this.setState({
            loading: true
        })

        fetch(`${API_URL}/cryptocurrencies/?page=1&perPage=10`)
        .then( resp => {
            return resp.json()
        })
        .then(data => {
            const {currencies} = data;
            this.setState({
                loading: false,
                currencies
            })
        })
    }

    render() {
        const {currencies, loading, error} = this.state;
        if (loading){
            return(
                <div className="loading-contanier">
                    <Loading/>
                </div>
            )
        }
        return(
            <div className="Table-container">
              <table className="Table">
                  <thead className="Table-head">
                    <tr>
                        <th>Cryptocurrency</th>
                        <th>Price</th>
                        <th>Market Cap</th>
                        <th>24H Change</th>
                    </tr>
                  </thead>
                  <tbody className="Table-body">
                    {
                        currencies.map(({ 
                            id, 
                            rank, 
                            name, 
                            price, 
                            marketCap, 
                            percentChange24h 
                        }) => { 
                            return(
                                <tr key={id}>
                                    <td>
                                        <span className="Table-rank">{rank}</span>
                                        {name}
                                    </td>
                                    <td>
                                        <span className="Table-dollar">$</span>
                                        {price}
                                        </td>
                                    <td>
                                        <span className="Table-dollar">$</span>
                                        {marketCap}
                                    </td>
                                    <td>
                                        {renderChangePercent(percentChange24h)}
                                    </td>
                                </tr>
                            )
                        })
                    }
                  </tbody>
              </table>
            </div>
        )
    };
};

export default List;