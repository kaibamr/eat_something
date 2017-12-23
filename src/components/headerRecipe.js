import React from 'react';
import Image from 'react-lazy-image';

const HeaderRecipe = (props) => { 
    const { rating, name } = props;

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<i className="fa fa-star" key={i} />);
        }
        return stars;
     };

    const setImageSize = (url, size) => {
        const newLink = url.replace('s90', `s${size}`);
        console.log(url);
        console.log(newLink);
        return newLink;
    };

    const style = { backgroundImage: 'url(' + setImageSize(props.url, 1200) + ')' };
    const smallUrl = setImageSize(props.url, 280);

    return (    
        <div className="header-recipe">
            <div style={style} className="bg-image" />
            <div className="header-text">
                    <h2>{name}</h2>
                    <h3>Rating {renderStars(rating)}</h3>
            </div>   
            <div className="header-img">
                <Image className="small-img" source={smallUrl} />
            </div>
        </div>
    );
};

export default HeaderRecipe;
