import React, { useEffect, useState } from "react";
import NavBar from "../../NavBar/NavBar";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

function UpdateMeal() {
  const navigate = useNavigate();
  const { id } = useParams();
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

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/meelplan/${id}`, mealplan);
    alert("Meel Plane Update successfully");
    navigate("/mealdetails");
  };
  const loadUser = async (e) => {
    const result = await axios.get(`http://localhost:8080/meelplan/${id}`);
    setMeal(result.data);
  };
  return (
    <div>
      <NavBar />
      <div className="form_box">
        <div>
          <h1 className="topic">
            Update<span className="topicsub"> Meal Plane..!</span>
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
              placeholder="Enter routines"
            />
            <br></br>
            <label className="form_lable" for="pushups">
              recipe:
            </label>
            <br />
            <input
              onChange={(e) => onInputChange(e)}
              type="text"
              className="form_input"
              value={recipe}
              name="recipe"
              placeholder="Enter number of pushups completed"
            />
            <br />
            <label className="form_lable" for="weight">
              info:
            </label>
            <br></br>
            <input
              onChange={(e) => onInputChange(e)}
              type="text"
              className="form_input"
              value={info}
              name="info"
              placeholder="Enter weight lifted"
            />
            <br />
            <label className="form_lable" for="size">
              size:
            </label>
            <br></br>
            <textarea
              className="form_input"
              value={size}
              onChange={(e) => onInputChange(e)}
              name="size"
              placeholder="Enter a brief description"
            ></textarea>
            <button className="add_btnbtn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateMeal;
