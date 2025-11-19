import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../../NavBar/NavBar";
import { useParams } from "react-router";
import "../workout.css";
import { Link } from "react-router-dom";
function MealDetails() {
  const [mealplan, setMeal] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    loadMeal();
  }, []);

  const loadMeal = async () => {
    const result = await axios.get("http://localhost:8080/meelplan");
    setMeal(result.data);
  };

  // Delete workout function
  const deleteMeal = async (id) => {
    // Display confirmation dialog
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this meelplan?"
    );
    if (confirmDelete) {
      try {
        // Send DELETE request to delete workout
        await axios.delete(`http://localhost:8080/meelplan/${id}`);
        // Reload Meal after successful deletion
        loadMeal();
        // Display success message
        alert("meelplan deleted successfully!");
      } catch (error) {
        // Handle any errors
        console.error("Error deleting workout:", error);
        // Display error message
        alert("An error occurred while deleting the meelplan.");
      }
    }
  };

  return (
    <div>
      <NavBar />
      <h1 className="topic">
        Your Meal Plane<span className="topicsub"> Details..!</span>
      </h1>
      <div className="table_main">
      <button
          className="addpost"
          onClick={() => (window.location.href = "/addmeal")}
        >
          Add New Meal
        </button>
        <br/>
        <table className="table_details_admin">
          <thead>
            <tr>
              <th className="admin_tbl_th">Num</th>
              <th className="admin_tbl_th">name</th>
              <th className="admin_tbl_th">recipe</th>
              <th className="admin_tbl_th">info</th>
              <th className="admin_tbl_th">size</th>
              <th className="admin_tbl_th">date</th>
              <th className="admin_tbl_th">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mealplan.map((meel, index) => (
              <tr key={index}>
                <td className="admin_tbl_td">{index + 1}</td>
                <td className="admin_tbl_td">{meel.name}</td>
                <td className="admin_tbl_td">{meel.recipe}</td>
                <td className="admin_tbl_td">{meel.info}</td>
                <td className="admin_tbl_td">{meel.size}</td>
                <td className="admin_tbl_td">{meel.date}</td>
                <td className="admin_tbl_td">
                  <Link to={`/updatemeal/${meel.id}`} className="btnbtn">
                    Update
                  </Link>
                  <button
                    onClick={() => deleteMeal(meel.id)}
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

export default MealDetails;
