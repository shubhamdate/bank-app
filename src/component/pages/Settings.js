import React, { useState, useEffect } from "react";
import { TextField, Avatar, Button } from "@mui/material";
import ReactFlagsSelect from "react-flags-select";
import "./flags.css";

import avt_1 from "../sidebar-logo/avt-1.png";
import { connect } from "react-redux";
import { Navigate, NavLink } from "react-router-dom";
import Nav from "../utils/Nav";

import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Settings = (props) => {
  const [select, setSelect] = useState("SE");
  const onSelect = (code) => setSelect(code);
  console.log("SELECT", select);
  const menuItem = [
    {
      path: "/settings",
      name: "Edit Profile",
    },
    {
      path: "/",
      name: "Security",
    },
    {
      path: "/",
      name: "Preferences",
    },
  ];
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  var isMobile;
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  if (screenSize.width < 960) {
    isMobile = true;
  } else {
    isMobile = false;
  }
  console.log(props.user);

  if (!props.isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <div style={{ width: "100%", backgroundColor: "#ffffff" }}>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          alignItems: "center",
          flexDirection: isMobile ? "column" : "row",
          width: "95%",
          borderBottomStyle: "solid",
          borderBottomColor: "grey",
          borderWidth: "0.2px",
        }}
      >
        <div
          style={{
            fontSize: "28px",
            paddingBottom: "20px",
            fontWeight: "600",
            color: "#0a0f21",
          }}
        >
          Services
        </div>
        <Nav />
      </div>
      <div
        style={{
          margin: "20px",
          padding: "20px",
          width: "95%",
        }}
      >
        <div
          style={{
            width: "100%",
            borderBottomStyle: "solid",
            borderBottomColor: "grey",
            borderWidth: "0px",
            alignContent: "space-between",
            display: "flex",
          }}
        >
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="sidebar-column"
              style={({ isActive }) => ({
                color: isActive ? "#314ca3" : "#888ea2",
                display: "flex",
                paddingRight: "20px",
              })}
            >
              {({ isActive }) =>
                isActive ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      className="link_text"
                      style={{
                        fontSize: "18px",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                      }}
                    >
                      {item.name}
                    </div>
                    <div style={{ height: "8px" }}></div>
                    <div
                      style={{
                        height: "6px",
                        width: "100%",
                        backgroundColor: "#314ca3",
                        borderTopRightRadius: "10px",
                        borderTopLeftRadius: "10px",
                      }}
                    >
                      {" "}
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      className="link_text"
                      style={{
                        fontSize: "18px",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                      }}
                    >
                      {item.name}
                    </div>
                    <div style={{ height: "8px" }}></div>
                    <div
                      style={{
                        height: "6px",
                        width: "100%",
                      }}
                    >
                      {" "}
                    </div>
                  </div>
                )
              }
            </NavLink>
          ))}
        </div>
        <div style={{ height: "32px", width: "100%" }}></div>
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              marginTop: "20px",
            }}
          >
            <Avatar alt="Joe" src={avt_1} sx={{ width: 130, height: 130 }} />
          </div>

          <div style={{ width: "95%", padding: "20px", color: "#888ea2" }}>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ width: "47%" }}>
                <div style={{ fontSize: "18px" }}>Your Name</div>
                <div style={{ height: "17px" }}></div>
                <TextField
                  placeholder="Name"
                  required
                  name="username"
                  defaultValue={props.user.name}
                  //value={}
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
                <div style={{ fontSize: "18px" }}>Username</div>
                <div style={{ height: "17px" }}></div>
                <TextField
                  placeholder="Username"
                  required
                  name="password"
                  defaultValue={props.user.username}
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
            <div style={{ height: "17px" }}></div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ width: "47%" }}>
                <div style={{ fontSize: "18px" }}>Email</div>
                <div style={{ height: "17px" }}></div>
                <TextField
                  placeholder="Email"
                  required
                  name="username"
                  defaultValue={props.user.email}
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
                  // value={Password}

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
            <div style={{ height: "17px" }}></div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ width: "47%" }}>
                <div style={{ fontSize: "18px" }}>Date of Birth</div>
                <div style={{ height: "17px" }}></div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    sx={{
                      fontSize: "16px",
                      color: "#b4b6c4",
                      borderColor: "#b4b6c4",
                      borderWidth: "1px",
                      width: "100%",
                      backgroundColor: "#ffffff",
                    }}
                    defaultValue={dayjs("2022-04-17")}
                  />
                </LocalizationProvider>
              </div>
              <div style={{ width: "47%" }}>
                <div style={{ fontSize: "18px" }}>Present Address</div>
                <div style={{ height: "17px" }}></div>
                <TextField
                  placeholder="Present Addressd"
                  required
                  name="password"
                  //   value={password}

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
            <div style={{ height: "17px" }}></div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ width: "47%" }}>
                <div style={{ fontSize: "18px" }}>Permanent Address</div>
                <div style={{ height: "17px" }}></div>
                <TextField
                  placeholder="Address"
                  required
                  name="username"
                  //   value={username}

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
                <div style={{ fontSize: "18px" }}>City</div>
                <div style={{ height: "17px" }}></div>
                <TextField
                  placeholder="City"
                  required
                  name="password"
                  //   value={password}

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
            <div style={{ height: "17px" }}></div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ width: "47%" }}>
                <div style={{ fontSize: "18px" }}>Postal Code</div>
                <div style={{ height: "17px" }}></div>
                <TextField
                  placeholder="Postal Code"
                  required
                  name="username"
                  //   value={username}

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
                <div style={{ fontSize: "18px" }}>Country</div>
                <div style={{ height: "17px" }}></div>
                <ReactFlagsSelect
                  selected={select}
                  onSelect={onSelect}
                  countries={["IN", "GB", "IE", "IT", "NL", "SE", "PK", "BN"]}
                  sx={{
                    fontSize: "16px",

                    borderColor: "#b4b6c4",
                    borderWidth: "1px",
                    width: "100%",
                    backgroundColor: "#ffffff",
                  }}

                  /*showSelectedLabel={showSelectedLabel}
        selectedSize={selectedSize}
        showOptionLabel={showOptionLabel}
        optionsSize={optionsSize}
        placeholder={placeholder}
        searchable={searchable}
        searchPlaceholder={searchPlaceholder}
        alignOptionsToRight={alignOptionsToRight}
        // fullWidth={fullWidth}
        disabled={disabled} */
                />
              </div>
            </div>
            <div style={{ height: "17px" }}></div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                variant="contained"
                size="medium"
                type="submit"
                sx={{
                  ":hover": { backgroundColor: "#343c6a" },
                  minWidth: "190px",
                  marginRight: "0px",
                  backgroundColor: "#314ca3",
                  borderRadius: "6px",
                  fontWeight: "400",
                  fontSize: "16px",
                  color: "#ffffff",
                }}
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  isAuth: state.auth.isAuthenticated,
  user: state.auth.user,
});
export default connect(mapStateToProps)(Settings);
