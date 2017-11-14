import React, { Component } from 'react';
import { connect } from 'react-redux';

class RecipesList extends Component {
    renderRecipes(recipesData) {
       const name = recipesData.recipeName

        return (
            <li key={recipesData.id}>
                {name}
            </li>
        );
    }

    render () {
        return (
            <ul>
                {!this.props.recipes ? null : this.props.recipes[0].matches.map(this.renderRecipes)} 
            </ul>
        );
    }
}

function mapStateToProps({ recipes }) {
    return { recipes };
}

export default connect(mapStateToProps, null)(RecipesList);