import ReactDOM from "react-dom/client";
import { imgBaseUrl, restaurantCardData } from "./config";

const Header = function () {
  return (
    <div className="header">
      <h2 className="logo">Food</h2>
      {/* TODO: add current location  */}
      <ul className="nav-items">
        <li>Help</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

const RestaurantCard = (props) => {
  return (
    <div className="res-card">
      <img
        className="res-image"
        alt="Restaurant Image"
        src={imgBaseUrl + props.imgId}
      ></img>
      <h3>{props.name}</h3>
      <ul>
        <li>{props.rating}</li>
        <li>{props.time}</li>
        <li>{props.cost}</li>
      </ul>
      {/* TODO: Implement Quick View */}
    </div>
  );
};

const RestaurantList = () => {
  return (
    <>
      <div className="list-header">
        <input
          className="search-input"
          placeholder="Enter Restaurant Name"
        ></input>
        <button className="search-btn" type="button">
          Search
        </button>

        <ul className="filters">
          <li>Rating</li>
          <li>Delivery TIme</li>
          <li>Cost</li>
        </ul>
      </div>
      <div className="list-cont">{getRestaurantCards}</div>
    </>
  );
};

const getRestaurantCards = restaurantCardData.map((res) => {
  const restaurant = {
    name: res.data.data.name,
    rating: res.data.data.avgRating,
    time: res.data.data.deliveryTime,
    cost: res.data.data.costForTwoString,
    imgId: res.data.data.cloudinaryImageId,
  };
  return <RestaurantCard {...restaurant} />;
});

const FoodApp = () => {
  return (
    <div>
      <Header />
      <RestaurantList />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FoodApp />);
