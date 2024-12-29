import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../actions/auth";
import { connect } from "react-redux";

import log_img from "../sidebar-logo/bank.png";
import bank_logo from "../sidebar-logo/bank-logo.png";
import { setAlert, removeAlert } from "../../actions/alert";
import Alert from "../utils/Alert";
import Spinner from "../utils/Spinner";

import { Button, TextField } from "@mui/material";


function Login(props) {
  const [formData, setForm] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const onChange = (e) => {
    setForm({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    props.login({ username, password });
  };

  return props.loading ? ( 
    <Spinner/>
  ): (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "83%",
          backgroundColor: "#e6e7eb",
          borderRadius: "6px",
          flexDirection: "row",
          display: "flex",
        }}
      >
        <div style={{ width: "50%", padding: "30px" }}>
          <div className="top_section">
            <img
              style={{ height: "40px", padding: "25px" }}
              src={bank_logo}
              alt="mySvgImage"
            />
          </div>
          <div style={{ fontSize: "26px" }}>Login to your account</div>
          <div style={{ minHeight: "32px" }}>
            <Alert />
          </div>
          <form
            className="form"
            onSubmit={(e) => {
              onSubmit(e);
            }}
          >
            <div style={{ width: "100%" }}>
              <div style={{ fontSize: "18px" }}>Username</div>
              <div style={{ height: "17px" }}></div>
              <TextField
                placeholder="Username"
                required
                name="username"
                value={username}
                onChange={(e) => {
                  onChange(e);
                }}
                sx={{
                  fontSize: "16px",
                  color: "#b4b6c4",
                  borderColor: "#b4b6c4",
                  borderWidth: "1px",
                  width: "100%",
                  backgroundColor: "#ffffff",
                }}
              />
            </div>
            <div style={{ height: "32px" }}></div>
            <div style={{ width: "100%" }}>
              <div style={{ fontSize: "18px" }}>Password</div>
              <div style={{ height: "17px" }}></div>
              <TextField
                placeholder="Password"
                required
                name="password"
                value={password}
                onChange={(e) => {
                  onChange(e);
                }}
                sx={{
                  fontSize: "16px",
                  color: "#b4b6c4",
                  borderColor: "#b4b6c4",
                  borderWidth: "1px",
                  width: "100%",
                  backgroundColor: "#ffffff",
                }}
              />
            </div>
            <div style={{ height: "32px" }}></div>
            <Button
              variant="contained"
              size="medium"
              type="submit"
              sx={{
                ":hover": { backgroundColor: "#343c6a" },
                width: "100%",
                backgroundColor: "#314ca3",
                borderRadius: "6px",
                fontWeight: "400",
                fontSize: "16px",
                color: "#ffffff",
              }}
            >
              Login
            </Button>
          </form>
          <div style={{ height: "32px" }}></div>
          <div
            style={{
              width: "100%",
              textAlign: "center",
            }}
          >
            <Link>Forgot Password</Link>
          </div>
          <div style={{ height: "32px" }}></div>
          <div
            style={{
              width: "100%",
              textAlign: "center",
            }}
          >
            Don’t have an account?<Link to="/Register"> Sign Up</Link>
          </div>
        </div>
        <div
          style={{
            width: "50%",
            backgroundColor: "#314ca3",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            <img
              style={{
                width: "70%",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto",
              }}
              src={log_img}
              alt="mySvgImage"
            />
            <p
              style={{
                textAlign: "center",
                fontSize: "22px",
                color: "#ffffff",
                padding: "20px",
              }}
            >
              Give trust to us to provide accurate data for your product
            </p>
            <p
              style={{
                textAlign: "center",
                fontSize: "16px",
                color: "#ffffff99",
                padding: "20px",
              }}
            >
              The fastest and simple way to generate growing business solutions
              with our products
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  alerts: state.alert,
});

export default connect(mapStateToProps, { login, setAlert, removeAlert })(
  Login
);
