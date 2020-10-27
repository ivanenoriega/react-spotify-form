import React from "react";
import { ReactComponent as Star } from "./../assets/images/star-empty.svg";

class RatingStars extends React.Component {
  determinePopularity = () => {};

  render() {
    this.props = 68;

    //DETERMINE AMOUNT OF STARS

    let amount;

    switch (this.props) {
      case this.props >= 80:
        amount = 5;
        break;

      case this.props >= 60:
        amount = 4;
        break;

      case this.props >= 40:
        amount = 3;
        break;

      case this.props >= 20:
        amount = 2;
        break;

      case this.props < 20:
        amount = 1;
        break;

      default:
        break;
    }

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
