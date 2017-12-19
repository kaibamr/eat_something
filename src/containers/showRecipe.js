import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShowRecipe extends Component {

    renderLoading() {
        if (this.props.loading) {
            return (
                <div className="loader">Loading...</div>
            );
        } 
    }

    render() {
        return (
            <div>
              {this.renderLoading()}
              {this.props.match.params.id}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.singleRecipe.loading
    };
};

export default connect(mapStateToProps, null)(ShowRecipe);
