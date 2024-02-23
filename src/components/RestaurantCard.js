import {IMG_CDN_URL} from "../constant";

const RestrautCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    sla,
  }) => {
    return (
      <div className="card">
        <img src={IMG_CDN_URL + cloudinaryImageId} alt="burger" />
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{sla.lastMileTravelString} minutes</h4>
      </div>
    );
  };


  export default RestrautCard;