import React, { Component } from 'react'

class SearchUsers extends Component {
    
    state = {
        search : ''
    }

    handleForm = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    searchUsers = (e) => {
        e.preventDefault();
        this.props.getUserSearch(this.state.search);
    }

    render() {
        const {search} = this.state;
        return (
            <form onSubmit={this.searchUsers}>
                <div className="input-group mb-3">
                    <input onChange={this.handleForm} value={search} placeholder='Search users...' id='search' type="text" className="form-control" />    
                </div>
                <button className="btn btn-secondary col-md-12">Search</button>
            </form>
            
        )
    }
}

export default SearchUsers
