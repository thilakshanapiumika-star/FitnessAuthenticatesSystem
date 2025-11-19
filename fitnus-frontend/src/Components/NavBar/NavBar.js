import React from "react";
import "./nav.css";
function NavBar() {
  return (
    <div>
      <div className="item_nav_bar">
        <div>
          <h1 className="logo">
            Fit<span className="logosub">Nus</span>
          </h1>
        </div>
        <div className="navitem">
          <div>
            <h3
              className="item_nav"
              onClick={() => (window.location.href = "/home")}
            >
              Home
            </h3>
          </div>
          <div>
            <h3
              onClick={() => (window.location.href = "/gallery")}
              className="item_nav"
            >
              Gallery
            </h3>
          </div>
          <div>
            <h3
              onClick={() => (window.location.href = "/mealdetails")}
              className="item_nav"
            >
              Meal Plane
            </h3>
          </div>
          <div>
            <h3
              onClick={() => (window.location.href = "/workoutdetails")}
              className="item_nav"
            >
              Workout Plan
            </h3>
          </div>
          <div>
            <h3
              onClick={() => (window.location.href = "/statusworkoutdetails")}
              className="item_nav"
            >
              Workout Status
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
