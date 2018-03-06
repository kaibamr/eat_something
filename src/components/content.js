import React from 'react';
import Flavors from './flavors';


const Content = (props) => {

    const { ingredients, flavors, source } = props;
    const renderIngredients = (ing) => {
        return (
            <li key={ing}><span>{ing}</span></li>
        );
    };
    
    return (
        <div className="content-wrapper">
        <div className="content">
            <div className="ingredients">
                <h3>Ingredients</h3>
                <ul>
                  {ingredients.map(renderIngredients.bind(this))}
                </ul>
            </div>
            <Flavors flavors={flavors} />
        </div>
        <div className="recipe-wrapper">
            <div className="recipe-button"><a href={source} target="_blank">Read Directions</a></div>
        </div>     
    </div>
    );
};

export default Content;
