import { useState, useEffect } from "react";
import { restaurantList } from "../constant";
import RestrautCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import {filterData} from "./utils/helper"
import useOnline from "./utils/useOnline";



const Body = () => {
  const [allRestaurants, setAllRestaurant] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState(""); //To create state variable

  //empty dependency array --> once after render
  // dep array [searchText] --> once after initial render + everyTime after the searchText changes
      useEffect(()=>{
        //API call
        getRestaurants();
      },[])
     
      async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        //option chaining 
        setAllRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      }

    // const isOnline = useOnline();

    // if(!isOnline){
    //    return <h1>Offline, please check your internet connection</h1>
    // }

  //Conditional Rendering
  //if restaurant is empty--> Shimmer UI
  // if restaurant has data --> actual data

  if(!allRestaurants) return null;
  // if(filteredRestaurants?.length === 0) return <h1>No Restaurant match your filter!!</h1>

  return allRestaurants?.length === 0? ( <Shimmer /> ): (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allRestaurants);
            //need to update the data
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((res) => {
          return (<Link to={"/restaurant/"+res.info.id} key={res.info.id}><RestrautCard {...res.info}/></Link>);
        })}
      </div>
    </>
  );
};

export default Body;
