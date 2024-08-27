import { CDN_URL } from "../utils/content.js";


const RestrauntCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL  + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Rating: {avgRating}</h4>
      <h4> Delivery: {resData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestrauntCard;
