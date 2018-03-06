import React from 'react';
import { Link } from 'react-router-dom';
import Image from 'react-lazy-image';


const ListItem = (props) => {
     const setImageSize = (url) => {
         const link = url[0];
         const newLink = link.replace('s90', 's600');
         if(!newLink.includes('https')) {
             return newLink.substring(0, 4) + 's:' + newLink.substring(5);
         }
         return newLink;
     };

     const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<i className="fa fa-star" key={i} />);
        }
        return stars;
     };

   const { id, smallImg, name, rating, url } = props;

    return (
            <li key={id}>
                <Link to={`/recipe/${url}`} >
                <Image
                    className="src" source={setImageSize(smallImg)}
                />
                <h3 className="results-title">{name}</h3>
                <p>Rating {renderStars(rating)}</p>
                </Link>
            </li>
    );
};

export default ListItem;
