import React, { useEffect, useState } from "react";
import NavBar from "../../NavBar/NavBar";
import axios from "axios";
import { useParams } from "react-router";
import "../workout.css";
import { Link } from "react-router-dom";

function WorkoutDetails() {
  const [workoutsplan, setWorkouts] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    loadWorkouts();
  }, []);

  const loadWorkouts = async () => {
    const result = await axios.get("http://localhost:8080/workoutplan");
    setWorkouts(result.data);
  };

  // Delete workout function
  const deleteWorkouts = async (id) => {
    // Display confirmation dialog
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this workoutPlan?"
    );
    if (confirmDelete) {
      try {
        // Send DELETE request to delete workout
        await axios.delete(`http://localhost:8080/workoutplan/${id}`);
        // Reload workouts after successful deletion
        loadWorkouts();
        // Display success message
        alert("Workout deleted successfully!");
      } catch (error) {
        // Handle any errors
        console.error("Error deleting workout:", error);
        // Display error message
        alert("An error occurred while deleting the workout.");
      }
    }
  };

  return (
    <div>
      <NavBar />
      <h1 className="topic">
        Your Workout Plan<span className="topicsub"> Details..!</span>
      </h1>
      <div className="table_main">
        <button
          className="addpost"
          onClick={() => (window.location.href = "/addworkout")}
        >
          Add New
        </button>
      </div>
      <div className="table_main">
        <table className="table_details_admin">
          <thead>
            <tr>
              <th className="admin_tbl_th">Num</th>
              <th className="admin_tbl_th">Routines</th>
              <th className="admin_tbl_th">Exercises</th>
              <th className="admin_tbl_th">Sets</th>
              <th className="admin_tbl_th">Date</th>
              <th className="admin_tbl_th">Repetitions</th>
              <th className="admin_tbl_th">Actions</th>
            </tr>
          </thead>
          <tbody>
            {workoutsplan.map((workout, index) => (
              <tr key={index}>
                <td className="admin_tbl_td">{index + 1}</td>
                <td className="admin_tbl_td">{workout.routines}</td>
                <td className="admin_tbl_td">{workout.exercises}</td>
                <td className="admin_tbl_td">{workout.sets}</td>
                <td className="admin_tbl_td">{workout.date}</td>
                <td className="admin_tbl_td">{workout.repetitions}</td>
                <td className="admin_tbl_td">
                  <Link to={`/updateworkout/${workout.id}`} className="btnbtn">
                    Update
                  </Link>
                  <button
                    onClick={() => deleteWorkouts(workout.id)}
                    className="btnbtndlt"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WorkoutDetails;
