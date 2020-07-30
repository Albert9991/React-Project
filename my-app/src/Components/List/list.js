import React, {Component} from 'react';
import {API_URL} from '../../config';

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
        console.log("List -> render -> this.state", this.state)
        
        if (loading){
            return(
                <div>
                    <h2>Loading...</h2>
                </div>
            )
        }
        return(
            <div>
                <h2>List</h2>
            </div>
        )
    };
};

export default List;