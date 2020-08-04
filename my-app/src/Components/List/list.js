import React, {Component} from 'react';
import {API_URL} from '../../config';
import './table.css'

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
            console.log("List -> componentDidMount -> currencies", currencies);
            this.setState({
                loading: false,
                currencies
            })
            console.log(data)
        })
    }

    render() {
        const {currencies, loading, error} = this.state;
        if (loading){
            return(
                <div>
                    <h2>Loading...</h2>
                </div>
            )
        }
        return(
            <div className="Table-container">
              <table className="Table">
                  <thead className="Table-head">
                    <tr>
                        <th>Cryptocurrency</th>
                        <th>Prise</th>
                        <th>Market Cap</th>
                        <th>24H Change</th>
                    </tr>
                  </thead>
                  <tbody className="Table-body">
                    {
                        currencies.map((row) => {
                            return(
                                <tr>
                                    <td>{row.id}</td>
                                    <td>{row.price}</td>
                                    <td>{row.marketCap}</td>
                                    <td>{row.percentChange24h}</td>
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