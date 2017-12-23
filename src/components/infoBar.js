import React from 'react';

const InfoBar = (props) => {
    const { length, time, servings } = props;

    return (
        <div className="info-text">
            <div className="wrapper">
                <div className="item">
                    <span className="top">{length}</span>
                    <span className="bottom">Ingredients</span>
                </div>
                <div className="item">
                    <span className="top">{time}</span>
                    <span className="bottom">Total Time</span>
                </div>
                <div className="item">
                    <span className="top">{servings}</span>
                    <span className="bottom">Servings</span>
                </div>
            </div>
        </div>
    );
};

export default InfoBar;
