import {IMG_CDN_URL} from "../constant";

const FoodItem = ({
    name,
    description,
    imageId,
    price,
  }) => {
    return (
      <div className="card">
        <img src={IMG_CDN_URL + imageId} alt="burger" />
        <h2>{name}</h2>
        <h3>{description}</h3>
        <h4>Rupees: {price}</h4>
      </div>
    );
  };


  export default FoodItem;