import React, { useEffect, useState } from "react";
import NavBar from "../../NavBar/NavBar";
import { useNavigate } from "react-router";
import axios from "axios";

function AddWorkouts() {
  const navigate = useNavigate();
  const [workoutplan, setWorkouts] = useState({
    routines: "",
    exercises: "",
    sets: "",
    repetitions: "",
    date: "",
  });

  const { routines, exercises, sets, repetitions, date } = workoutplan;

  const onInputChange = (e) => {
    setWorkouts({ ...workoutplan, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/workoutplan", workoutplan);
    alert("Workout Plan uploaded successfully");
    navigate("/workoutdetails");
  };
  return (
    <div>
      <NavBar />
      <div className="form_box">
        <div>
          <h1 className="topic">
            Add New<span className="topicsub"> Workout Plan..!</span>
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
            />
            <br></br>
            <label className="form_lable" for="routines">
              Routines:
            </label>
            <br></br>
            <input
              onChange={(e) => onInputChange(e)}
              type="text"
              className="form_input"
              value={routines}
              required
              name="routines"
            />
            <br></br>
            <label className="form_lable" for="pushups">
              Exercises:
            </label>
            <br />
            <input
              onChange={(e) => onInputChange(e)}
              type="text"
              className="form_input"
              value={exercises}
              name="exercises"
            />
            <br />
            <label className="form_lable" for="weight">
              Sets:
            </label>
            <br></br>
            <input
              onChange={(e) => onInputChange(e)}
              type="text"
              className="form_input"
              value={sets}
              name="sets"
            />
            <br />
            <label className="form_lable" for="Repetitions">
              Repetitions:
            </label>
            <br></br>
            <input
              className="form_input"
              value={repetitions}
              onChange={(e) => onInputChange(e)}
              name="repetitions"
            ></input>
            <button className="add_btnbtn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddWorkouts;
