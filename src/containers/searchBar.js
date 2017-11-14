import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchRecipes } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.searchRecipes(this.state.term);
    }

    render () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input value={this.state.term} onChange={this.onInputChange}  />
                <input type="submit"/>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( { searchRecipes }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
