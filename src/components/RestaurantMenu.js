import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IMG_CDN_URL} from '../constant';
import Shimmer from "./Shimmer";
import useRestaurant from "./utils/useRestauraunt";
import {addItem} from './utils/cartSlice';
import { useDispatch } from "react-redux";

const RestaurantMenu= () =>{
    //how to read a dynamic URL params
    const params = useParams();
    const { resId } = params;

    const restaurant = useRestaurant(resId);

    const dispatch = useDispatch();

   const addFoodItem = (item) => {
     dispatch(addItem(item))
    }


    return !restaurant? (<Shimmer/>): (
        <div className="menu">
            <div>
            <h1>Restaurant id : {resId}</h1>
            <h2>{restaurant?.cards[2]?.card?.card?.info?.name}</h2>
            <img src={IMG_CDN_URL + restaurant?.cards[2]?.card?.card?.info?.cloudinaryImageId} alt={restaurant?.cards[2]?.card?.card?.info?.name}/>
            <h3>Area: {restaurant?.cards[2]?.card?.card?.info?.areaName}</h3>
            <h3>City: {restaurant?.cards[2]?.card?.card?.info?.city}</h3>
            <h3>Rating: {restaurant?.cards[2]?.card?.card?.info?.avgRating}</h3>
            <h3>Cost: {restaurant?.cards[2]?.card?.card?.info?.costForTwoMessage}</h3>
            </div>
            <div>
                <h1>Menu</h1>
                <ul>
                    {(restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[9]?.card?.card?.itemCards).map((item) => (
                    <li key={Object.values(item?.card?.info?.id)}>{Object.values(item?.card?.info?.name)} - <button className="addItem" onClick={()=> addFoodItem((item?.card?.info))}>Add</button></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;