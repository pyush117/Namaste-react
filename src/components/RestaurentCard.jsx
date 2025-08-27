import { useContext, useState } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurentCard = (props) => {
  const { resData = {} } = props;
  // console.log(resData);
  const { loggedInUser } = useContext(UserContext);
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info || {};

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[250px] bg-gray-200 rounded-lg hover:bg-red-100"
    >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={cloudinaryImageId ? CDN_URL + cloudinaryImageId : " "}
      ></img>

      <div className="food-info">
        <h3 className="font-bold py-4 text-lg">
          {name || "Name not available"}
        </h3>
        <h4>{cuisines?.join(",") || "Cuisines not available"}</h4>
        <h4>{avgRating || "N/A"}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.slaString}</h4>
        <h4> User:{loggedInUser}</h4>
      </div>
    </div>
  );
};
// higher order component
// input- restaurentCard=> restaurentCardPromoted/open

export const withOpenLabel = (RestaurentCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-400 text-white mx-2 p-2 rounded-lg">
          Open
        </label>
        <RestaurentCard {...props} />
      </div>
    );
  };
};
export default RestaurentCard;
