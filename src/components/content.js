import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';

const Content = (props) => {

    const { ingredients, flavors } = props;

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
            <div className="nutritions">
                <h3>Flavors</h3>
                <ul className="nutritions-list">
                    {/* <div className="first-line">
                        <li className="circle-list-item"><CircularProgressbar percentage={60} className="circle" initialAnimation="true" /></li>
                        <li className="circle-list-item"><CircularProgressbar percentage={60} className="circle" initialAnimation="true" /></li>
                        <li className="circle-list-item"><CircularProgressbar percentage={60} className="circle" initialAnimation="true" /></li>
                    </div>
                    <div className="second-line">
                        <li className="circle-list-item"><CircularProgressbar percentage={60} className="circle" initialAnimation="true" /></li>
                        <li className="circle-list-item"><CircularProgressbar percentage={60} className="circle" initialAnimation="true" /></li>
                        <li className="circle-list-item"><CircularProgressbar percentage={60} className="circle" initialAnimation="true" /></li>
                    </div> */}
                </ul>
            </div>
        </div>
    </div>
    );
};

export default Content;
