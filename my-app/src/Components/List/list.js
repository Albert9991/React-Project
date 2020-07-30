import React, {Component} from 'react';
import {API_URL} from '../../config';

class List extends Component {
    constructor() {
        super();
        this.state = {

        };
    };

    componentDidMount(){
        fetch(`${API_URL}/cryptocurrencies/?page=1&perPage=10`)
        .then( resp => {
            return resp.json()
        })
        .then(data => {
            console.log(data)
        })
    }

    render() {
        return(
            <div>
                <h2>List</h2>
            </div>
        )
    };
};

export default List;