import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class User extends Component {
    render() {
        const {login , avatar_url , html_url , repos_url} = this.props.user;

        return (
            <div>
                <div className="card">
                    <img className="card-img-top" src={avatar_url} alt=""/>
                    <div className="card-body">
                        <h4 className="card-title">{login}</h4>
                        <p className="card-text">
                            <Link to={'/users/'+login} className="btn btn-primary mx-2">Show more</Link>
                            <a href={repos_url} className="btn btn-info">Repositories</a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default User
