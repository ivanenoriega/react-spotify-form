import React from "react";
import { ReactComponent as Star } from "./../assets/images/star-empty.svg";

class RatingStars extends React.Component {
  determinePopularity = () => {};

  render() {
    return (
      <div className="artist__stars">
        <Star className="artist__star" />
        <Star className="artist__star" />
        <Star className="artist__star" />
        <Star className="artist__star" />
        <Star className="artist__star" />
      </div>
    );
  }
}

export default RatingStars;
