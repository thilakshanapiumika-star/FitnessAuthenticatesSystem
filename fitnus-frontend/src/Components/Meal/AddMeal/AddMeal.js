import React, { useEffect, useState } from "react";
import NavBar from "../../NavBar/NavBar";
import { useNavigate } from "react-router";
import axios from "axios";

function AddMeal() {
  const navigate = useNavigate();
  const [mealplan, setMeal] = useState({
    name: "",
    recipe: "",
    info: "",
    size: "",
    date: "",
  });

  const { name, recipe, info, size, date } = mealplan;

  const onInputChange = (e) => {
    setMeal({ ...mealplan, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/meelplan", mealplan);
    alert("Meal Plan uploaded successfully");
    navigate("/mealdetails");
  };
  return (
    <div>
      <NavBar />
      <div className="form_box">
        <div>
          <h1 className="topic">
            Add New<span className="topicsub"> Meal Plan..!</span>
          </h1>

          <form onSubmit={(e) => onSubmit(e)} className="form_full">
            <label className="form_lable" for="distance">
              Date:
            </label>
            <br></br>
            <input
              onChange={(e) => onInputChange(e)}
              type="date"
              className="form_input"
              value={date}
              required
              name="date"
              placeholder="Enter date"
            />
            <br></br>
            <label className="form_lable" for="name">
              name:
            </label>
            <br></br>
            <input
              onChange={(e) => onInputChange(e)}
              type="text"
              className="form_input"
              value={name}
              required
              name="name"
              placeholder="Enter name"
            />
            <br></br>
            <label className="form_lable" for="pushups">
              recipe:
            </label>
            <br />
            <textarea
              onChange={(e) => onInputChange(e)}
              type="text"
              className="form_input"
              value={recipe}
              name="recipe"
              placeholder="Enter recipe"
            />
            <br />
            <label className="form_lable" for="weight">
              info:
            </label>
            <br></br>
            <textarea
              onChange={(e) => onInputChange(e)}
              type="text"
              className="form_input"
              value={info}
              name="info"
              placeholder="Enter info"
            />
            <br />
            <label className="form_lable" for="size">
              size:
            </label>
            <br></br>
            <input
              className="form_input"
              value={size}
              onChange={(e) => onInputChange(e)}
              name="size"
              placeholder="Enter size"
            ></input>
            <button className="add_btnbtn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddMeal;
