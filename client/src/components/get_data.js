import React, { Component } from 'react';
import axios from 'axios';


class GetData extends  Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.getData();
        this.getBetter();
    }

    async getData(){
        const response = await axios.get('/api/get-stuff');

        console.log('Response: ', response.data);
    }

    async getBetter(){
        const betterResponse = await axios.get('/api/better-stuff');

        console.log('Better Response: ', betterResponse.data);
    }

    render(){
        return (
            <div>
                <h1>This is get data!</h1>
            </div>
        )
    }
}

export default GetData;