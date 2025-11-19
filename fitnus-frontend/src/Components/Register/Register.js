import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LogImg from "./img/log.jpg";
function Register() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
  });
  const { firstname, lastname, email, password, phone } =
    user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      // Check if the email already exists in the database
      const checkEmailResponse = await axios.get(
        `http://localhost:8080/user/check-email/${user.email}`
      );

      if (checkEmailResponse.data.exists) {
        // If email exists, show an alert and prevent further registration
        alert("Email already exists. Please use a different email.");
        navigate("/register");
      } else {
        // If email doesn't exist, proceed with registration
        await axios.post("http://localhost:8080/user", user);
        alert("Registration successful! You can now log in.");
        navigate("/");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Registration failed. Please check your details and try again.");
    }
  };
  return (
    <div>
      <div className="ful_log_div">
        <div className="">
          <div className="auth_box">
            <div className="">
              <h2 className="auth_topic">Sign In</h2>
              <div className="auth_sub_box">
                <div className="leftbox_auth">
                  <img
                    src={LogImg}
                    alt="reg_img_left"
                    className="reg_img_left"
                  ></img>
                </div>

                <form className="rightbox_auth" onSubmit={(e) => onSubmit(e)}>
                  <div className="form_group">
                    <label className="form_lable_auth">First name</label>
                    <input
                      type="text"
                      className="frominput_auth"
                      placeholder="First Name"
                      name="firstname"
                      required
                      value={firstname}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>

                  <div className="form_group">
                    <label className="form_lable_auth">Last Name</label>
                    <input
                      type="text"
                      className="frominput_auth"
                      placeholder="Last Name"
                      name="lastname"
                      required
                      value={lastname}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>

                  <div className="form_group">
                    <label className="form_lable_auth">Email</label>
                    <input
                      type="email"
                      className="frominput_auth"
                      placeholder="Email"
                      required
                      name="email"
                      value={email}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>

                  <div className="form_group">
                    <label className="form_lable_auth">Password</label>
                    <input
                      type="password"
                      required
                      className="frominput_auth"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>

                  <div className="form_group">
                    <label className="form_lable_auth">phone</label>
                    <input
                      type="text"
                      required
                      className="frominput_auth"
                      placeholder="Address"
                      name="phone"
                      value={phone}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>

                  <button type="submit" className="btnbtnlog">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
