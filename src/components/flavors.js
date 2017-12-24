import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import isEmptyObject from 'is-empty-object';
const Flavors = (props) => {

    const { Bitter, Meaty, Piquant, Salty, Sour, Sweet } = props.flavors;

    const flavorsPercentage = (flavor) => {
        return Math.round(flavor * 100);
    };

    const renderFlavors = () => {
        return (
        <div>
            <div className="first-line">
                <li className="circle-list-item"><CircularProgressbar percentage={flavorsPercentage(Bitter)} className="circle" initialAnimation="true" /><i className="circle-text-desc">Bitter</i></li>
                <li className="circle-list-item"><CircularProgressbar percentage={flavorsPercentage(Meaty)} className="circle" initialAnimation="true" /><i className="circle-text-desc">Meaty</i></li>
                <li className="circle-list-item"><CircularProgressbar percentage={flavorsPercentage(Piquant)} className="circle" initialAnimation="true" /><i className="circle-text-desc">Piquant</i></li>
            </div>
            <div className="second-line">
                <li className="circle-list-item"><CircularProgressbar percentage={flavorsPercentage(Salty)} className="circle" initialAnimation="true" /><i className="circle-text-desc">Salty</i></li>
                <li className="circle-list-item"><CircularProgressbar percentage={flavorsPercentage(Sour)} className="circle" initialAnimation="true" /><i className="circle-text-desc">Sour</i></li>
                <li className="circle-list-item"><CircularProgressbar percentage={flavorsPercentage(Sweet)} className="circle" initialAnimation="true" /><i className="circle-text-desc">Sweet</i></li>
            </div>
        </div>
        );
    }

    return (
        <div className="nutritions">
        <h3>Flavors</h3>  
            <ul className="nutritions-list">
                {!isEmptyObject(props.flavors) ? renderFlavors() : <h2>unfortunately no data provided </h2>} 
            </ul>
        </div>
    );
};

export default Flavors;
