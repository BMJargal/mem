// import * as React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="nav">
      <p>MeMe</p>

      <ul>
        <li>
          <Link to="/Hot">Hot</Link>
        </li>
        <li>
          <Link to="/Regular">Regular</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
