import ReactDOM from "react-dom/client";

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

const RestaurantList = () => {
  return (
    <>
      <div className="list-header">
          <input className="search-input" placeholder="Enter Restaurant Name"></input>
          <button className="search-btn" type="button" >Search</button>

        <ul className="filters">
          <li>Rating</li>
          <li>Delivery TIme</li>
          <li>Cost</li>
        </ul>
      </div>
      <div className="list-cont">
        <RestaurantCard />
      </div>
    </>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img className="res-image" alt="Restaurant Image"></img>
      <h3>Name</h3>
      <ul>
        <li>Rating</li>
        <li>Time</li>
        <li>Cost</li>
      </ul>
      {/* TODO: Implement Quick View */}
    </div>
  );
};

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
