import { useState, useContext } from "react";
import logo from "../assets/foodie_faster.jpg";
import { Link } from "react-router-dom";
import useOnline from "./utils/useOnline";
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => (
  <a href="/">
    <img className="logo" src={logo} alt="logo" />
  </a>
);

//React Components
// Functional components = It is the new way of writing the components & Name start with capital letter

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  const user = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header">
      <Title />
      <div className="nav-item">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>

          <li>
            <Link to="/cart">Cart-{cartItems.length} Items</Link>
          </li>
        </ul>
      </div>
      <h1 style={{ fontsize: "small" }}>
        {isOnline ? "🟢Online" : "🔴Offline"}
      </h1>
      <h4 style={{ color: "red", paddingTop: "5px" }}>{user?.user?.name}</h4>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
