import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRecipe, resetData } from '../actions';
import HeaderRecipe from '../components/headerRecipe';
import InfoBar from '../components/infoBar';
import Content from '../components/content';

class ShowRecipe extends Component {

    componentWillMount() {
        /* get Recipe from link */
        this.props.getRecipe(this.props.match.params.id);
    }
    
    renderLoading() {
        if (this.props.loading) {
            return (
                <div className="loader">Loading...</div>
            );
        } 
    }

    goBack() {
        this.props.resetData();
    }

    renderRecipe(data) {
        const { rating, name, ingredientLines, totalTime, numberOfServings } = data;
        const url = data.images[0].hostedSmallUrl;
        return (
            <div>
                <HeaderRecipe 
                    name={name} 
                    rating={rating} 
                    url={url}
                    back={() => this.goBack()} 
                />
                <InfoBar 
                    length={ingredientLines.length} 
                    time={totalTime} 
                    servings={numberOfServings}
                />
                <Content ingredients={data.ingredientLines} flavors={data.flavors} source={data.source.sourceRecipeUrl} />
            </div>
        );        
    }

    render() {
        const { data } = this.props;
        return (
            <div>
              {this.renderLoading()}
              {data ? this.renderRecipe(data) : null}
            </div>
        );
    }   
}

const mapStateToProps = (state) => {
    return {
        loading: state.singleRecipe.loading,
        data: state.singleRecipe.data
    };
};

export default connect(mapStateToProps, { getRecipe, resetData })(ShowRecipe);
