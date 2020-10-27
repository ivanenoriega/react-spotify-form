import React from "react";
import { ReactComponent as StarEmpty } from "./../assets/images/star-empty.svg";
import { ReactComponent as StarFull } from "./../assets/images/star.svg";

class RatingStars extends React.Component {
  render() {
    //DETERMINE AMOUNT OF STARS
    let amount =  Math.floor(this.props.stars / 20) ;


    return (
      <div className="artist__stars">
        {1 <= amount ? <StarFull className="artist__star"/>  : <StarEmpty className="artist__star"/> }
        {2 <= amount ? <StarFull className="artist__star"/>  : <StarEmpty className="artist__star"/> }
        {3 <= amount ? <StarFull className="artist__star"/>  : <StarEmpty className="artist__star"/> }
        {4 <= amount ? <StarFull className="artist__star"/>  : <StarEmpty className="artist__star"/> }
        {5 == amount ? <StarFull className="artist__star"/>  : <StarEmpty className="artist__star"/> }
        </div>
    );
  }
}

export default RatingStars;
