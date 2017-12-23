import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchRecipes, searchTermChanged } from '../actions';

class SearchBar extends Component {
    
    onInputChange(e) {
        e.preventDefault();
        this.props.searchTermChanged(e.target.value);
    }
    
    onFormSubmit(e) {
        e.preventDefault();
        this.props.searchRecipes(this.props.term);
    }

    render() {
        return (
        <div className="showcase grid">
            <div className="bg-image" />
            <div className="content-wrap">
                    <h2>Eat</h2>
                    <h1>Taste</h1>
                    <h2>Grow</h2> 
                    <form className="search-bar" onSubmit={this.onFormSubmit.bind(this)}>
                            <input 
                                type="search" 
                                className="search" 
                                placeholder="Do you want to eat something?" 
                                value={this.props.term} 
                                onChange={this.onInputChange.bind(this)} 
                            />
                            <button className="icon"><i className="fa fa-search" /></button>
                    </form>
            </div>
        </div> 
        );
    }
}

const mapStateToProps = (state) => {
    return {
        term: state.recipes.term
    };
};

export default connect(mapStateToProps, { searchRecipes, searchTermChanged })(SearchBar);
