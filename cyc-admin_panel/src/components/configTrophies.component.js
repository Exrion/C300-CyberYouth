import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

export default class ConfigTrophies extends Component{
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {
        fetch(
            "http://localhost:8080/api/trophies")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }

    render() {
        <div>
            
        </div>
    }
}