import React, { Component } from 'react'
import axios from "axios";

export default class Genres extends Component {
    constructor(){
        super();
        this.state = {
            genres: [],
            clicked: false
        };
    }

    getGenre = () => {
        console.log("in getGenre");
        this.setState({
            clicked: true
        });
        axios.get("/getGenre")
            .then(response => {
                console.log("sucess reaching getGenreupdated, now recieved");
                console.log(response);
                this.setState({
                    genres: response.data
                })
            })
            .catch(error => {
                console.log("error is " + error);
                return error;
            });
        console.log("leaving genre updated");
    };

    render() {
        return (
            <div>
                <button onClick={this.getGenre}>Get genres</button>
                {this.state.clicked===true && 
                    <ol>
                        {this.state.genres.map((item) =>(
                            <li key={item}>{item}</li>
                        ))}
                    </ol>
                 }
            </div>
        )
    }
} 

