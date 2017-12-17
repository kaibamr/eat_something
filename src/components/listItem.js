import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Image from 'react-lazy-image';


class ListItem extends Component {
     
     setImageSize(url) {
         const link = url[0];
         const newLink = link.replace('s90', 's600');
         return newLink;
     }

     renderStars(rating) {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<i className="fa fa-star" key={i} />);
        }
        return stars;
     }

    render() {
        const { id, smallImg, name, rating, url } = this.props;
        return (
            <li key={id}>
                <Link to={`/recipe/${url}`}>
                <Image
                    className="src" source={this.setImageSize(smallImg)}
                />
                <h3 className="results-title">{name}</h3>
                <p>Rating {this.renderStars(rating)}</p>
                </Link>
            </li>
        );
    }
}
export default ListItem;
