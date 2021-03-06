import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListItem from '../components/listItem';
import { getRecipe } from '../actions';

class SearchResults extends Component {

    renderLoading() {
        if (this.props.loading) {
            return (
                <div className="loader">Loading...</div>
            );
        } else if (!this.props.loading && !this.props.recipes) {
            
            return (
                <h2>Type something to search..</h2>
                
            );
        } else if (this.props.recipes.length === 0) {
            return (
                <h2>No results found</h2>
            );
        }
        
        return (
            <h2>Results</h2>
        );
    }

    renderRecipes(singleRecipe) {
        const { id, recipeName, rating, smallImageUrls } = singleRecipe;
        return ( 
            <ListItem 
                key={id} 
                url={id} 
                name={recipeName} 
                rating={rating} 
                smallImg={smallImageUrls} 
            />
        );
    }

    render() {
        const { recipes } = this.props;
        return (
           <div className="results">
               {this.renderLoading()}
               <ul className="container grid">
                 {recipes ? recipes.map(this.renderRecipes.bind(this)) : null}           
               </ul>
           </div>
        ); 
    }
}


const mapStateToProps = (state) => {
    return {
        loading: state.recipes.loading,
        recipes: state.recipes.data
    };
};

export default connect(mapStateToProps, { getRecipe })(SearchResults);
