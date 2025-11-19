import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogImg from "./img/logbk.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/login", user);

      if (response.status === 200 && response.data) {
        // Assuming your backend returns some data on successful login
        alert("Login successful");
        navigate("/home"); // Redirect to the desired page
      } else {
        console.log("Invalid credentials");
        alert("Invalid credentials. Please enter correct details.");
      }
    } catch (error) {
      console.error("Error while sending data to the server:", error.response);
      alert("An error occurred. Please try again."); // Display a generic error message
    }
  };

  return (
    <div>
      <div className="ful_log_div">
        <div className="">
          <div className="auth_box">
            <div className="">
              <h2 className="auth_topic">Login</h2>
              <div className="auth_sub_box">
                <div className="leftbox_auth">
                  <img
                    src={LogImg}
                    alt="log_img_left"
                    className="log_img_left"
                  ></img>
                </div>
                <div className="rightbox_auth">
                  <form onSubmit={onSubmit}>
                    <div className="form_group">
                      <label className="form_lable_auth">Email</label>
                      <br />
                      <input
                        type="email"
                        required
                        className="frominput_auth"
                        placeholder="Enter email"
                        name="email"
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>

                    <div className="form_group">
                      <label className="form_lable_auth">password</label>
                      <br />
                      <input
                        type="password"
                        required
                        className="frominput_auth"
                        placeholder="**********"
                        name="password"
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>

                    <div className="text-center">
                      <button type="submit" className="btnbtnlog">
                        LogIn
                      </button>
                    </div>
                  </form>

                  <p className="noacc">
                    Don't Have an account{" "}
                    <Link to="/regi">click to register</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
