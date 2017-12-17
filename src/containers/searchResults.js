import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ListItem from '../components/listItem';

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
        } 
        
        return (
            <h2>Results</h2>
        );
    }

    renderRecipes(singleRecipe) {
        const { id, recipeName, rating, smallImageUrls } = singleRecipe;
        return (     
             <ListItem key={id} name={recipeName} rating={rating} smallImg={smallImageUrls} />
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

export default connect(mapStateToProps, null)(SearchResults);
