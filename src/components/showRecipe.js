import React, { Component } from 'react';

class ShowRecipe extends Component {
    render() {
        return (
            <div>
              {this.props.match.params.id}
            </div>
        );
    }
}

export default ShowRecipe;
