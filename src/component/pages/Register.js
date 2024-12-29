import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import log_img from "../sidebar-logo/bank.png";
import bank_logo from "../sidebar-logo/bank-logo.png";
import { register } from "../../actions/auth";
import { setAlert, removeAlert } from "../../actions/alert";
import Alert from "../utils/Alert";

import { Button, FormControlLabel, FormGroup, TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const Register = (props) => {

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [formData, setForm] = useState({
    username: "",
    password: "",
    email: "",
    name: "",
    profile: "",
    role: 1,
  });

  const { username, password, email, name, profile } = formData;
console.log(formData);
  const onChange = (e) => {
    setForm({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    props.register({ username, password, email, name, profile });
  };

  //   if (!props.isRegistered) {
  //     return <Navigate to="/login" />;
  //   }
  return (
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
        <div style={{ width: "50%", padding: "20px" }}>
          <div className="top_section">
            <img
              style={{ height: "40px", padding: "25px" }}
              src={bank_logo}
              alt="mySvgImage"
            />
          </div>
          <div>Create your FirstBank Account</div>
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
              <div style={{ fontSize: "18px" }}>Name</div>
              <div style={{ height: "17px" }}></div>
              <TextField
                placeholder="Name"
                required
                type="text"
                name="name"
                value={name}
                onChange={(e) => {
                  onChange(e);
                }}
                sx={{
                  width: "100%",
                  fontSize: "16px",
                  color: "#b4b6c4",
                  borderColor: "#b4b6c4",
                  borderWidth: "1px",
                  backgroundColor: "#ffffff",
                }}
              />
            </div>
            <div style={{ height: "32px" }}></div>
            <div style={{ width: "100%" }}>
              <div style={{ fontSize: "18px" }}>Email Address</div>
              <div style={{ height: "17px" }}></div>
              <TextField
                placeholder="Email Address"
                name="email"
                required
                type="email"
                value={email}
                onChange={(e) => {
                  onChange(e);
                }}
                sx={{
                  width: "100%",
                  fontSize: "16px",
                  color: "#b4b6c4",
                  borderColor: "#b4b6c4",
                  borderWidth: "1px",
                  backgroundColor: "#ffffff",
                }}
              />
            </div>
            <div style={{ height: "32px" }}></div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ width: "47%" }}>
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
              <div style={{ width: "47%" }}>
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
            </div>
            <div style={{ height: "32px" }}></div>
            <div style={{ width: "100%" }}>
              <div style={{ fontSize: "18px" }}>Profile Image</div>
              
              <div style={{ height: "17px" }}></div>
              <input
                type="file"
                name="profile"
                required
                
                value={profile}
                onChange={(e) => {
                  onChange(e);
                }}
                style={{ display: "flex" }}
              />
            </div>
            <div style={{ height: "16px" }}></div>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                sx={{ fontSize: "16px", color: "#5d6180" }}
                label="By signing up I agree to Sastly Terms & Conditons and Privacy Policy"
              />
            </FormGroup>
            <div style={{ height: "16px" }}></div>
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
              Sign UP
            </Button>
          </form>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
              Regsiter Successfully
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent dividers>
              <Typography gutterBottom>
                You are Regsiter Successfully. You are Regsiter Successfully.
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={onclose}>
                Yes
              </Button>
            </DialogActions>
          </BootstrapDialog>
          <div style={{ height: "32px" }}></div>
          <div
            style={{
              width: "100%",
              textAlign: "center",
            }}
          >
            Already an user? <Link to="/Login"> Login</Link>
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
};

Register.prototype = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isRegistered: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isRegister: state.auth.isRegistered,
  loading: state.auth.loading,
  alerts: state.alert,
  user: state.auth.user,
});

export default connect(mapStateToProps, { setAlert, removeAlert, register })(
  Register
);
