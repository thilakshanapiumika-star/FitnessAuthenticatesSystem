import React from "react";
import { Route, Routes } from "react-router";
import AddPost from "./Components/UploadePost/AddPost/AddPost";
import PostDetails from "./Components/UploadePost/PostDetails/PostDetails";
import MealDetails from "./Components/Meal/MealDetails/MealDetails";
import AddMeal from "./Components/Meal/AddMeal/AddMeal";
import UpdateMeal from "./Components/Meal/UpdateMeal/UpdateMeal";
import WorkoutDetails from "./Components/WorkoutPlan/WorkoutsDetails/WorkoutDetails";
import AddWorkout from "./Components/WorkoutPlan/AddWorkouts/AddWorkouts";
import UpdateWorkout from "./Components/WorkoutPlan/UpdateWorkouts/UpdateWorkouts";
import StatusWorkoutDetails from "./Components/WorkoutStatus/WorkoutsDetails/WorkoutDetails";
import StatusAddWorkout from "./Components/WorkoutStatus/AddWorkouts/AddWorkouts";
import StatusUpdateWorkout from "./Components/WorkoutStatus/UpdateWorkouts/UpdateWorkouts";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
          <Route path="/regi" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/createpost" element={<AddPost />} />
          <Route path="/gallery" element={<PostDetails />} />
          <Route path="/mealdetails" element={<MealDetails />} />
          <Route path="/addmeal" element={<AddMeal />} />
          <Route path="/updatemeal/:id" element={<UpdateMeal />} />
          <Route path="/workoutdetails" element={<WorkoutDetails />} />
          <Route path="/addworkout" element={<AddWorkout />} />
          <Route path="/updateworkout/:id" element={<UpdateWorkout />} />
          <Route
            path="/statusworkoutdetails"
            element={<StatusWorkoutDetails />}
          />
          <Route path="/statusaddworkout" element={<StatusAddWorkout />} />
          <Route
            path="/statusupdateworkout/:id"
            element={<StatusUpdateWorkout />}
          />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
