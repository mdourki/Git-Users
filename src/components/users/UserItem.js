import axios from 'axios';
import React, { Component } from 'react'
import User from './User'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
/*
class UserItem extends Component {

    state = {
        user: {}
    }

    componentWillMount() {
        const login = this.props.match.params.login;
        axios.get(`https://api.github.com/users/${login}`)
            .then(response => {
                this.setState({
                    user: response.data
                })
            })
    }

    render() {
        const {user} = this.state;
        return (
            <div>
                <User user={user}/>
            </div>
        )
    }
}
*/

function UserItem() {
    let { login } = useParams();
    var user = '';
    axios.get(`https://api.github.com/users/${login}`)
            .then(function (response) {
                user = response.data 
            })   

    return (
        <div>
            <User user={user}/>
        </div>
    )
}

export default UserItem
