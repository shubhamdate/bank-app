import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { logout } from "../../actions/auth";
import bank_logo from "../sidebar-logo/bank-logo.png";
import transfer from "../sidebar-logo/logo-trans.svg";
import img_map from "../sidebar-logo/img_map.svg";
import img_home from "../sidebar-logo/img_home.svg";
import img_user from "../sidebar-logo/img_user.svg";
import img_loans from "../sidebar-logo/img_loans.svg";
import img_file from "../sidebar-logo/img_file.svg";
import img_settings from "../sidebar-logo/img_settings.svg";
import img_lightbulb from "../sidebar-logo/img_lightbulb.svg";
import img_service from "../sidebar-logo/img_service1.svg";
import Spinner from "../utils/Spinner";
import CustomizedDialogs from "../utils/BootstrapDialog.js";
const Sidebar = (props) => {
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <img src={img_home} alt="mySvgImage" />,
    },
    {
      path: "/transactions",
      name: "Transactions",
      icon: <img src={transfer} alt="mySvgImage" />,
    },
    {
      path: "/accounts",
      name: "Accounts",
      icon: <img src={img_user} alt="mySvgImage" />,
    },
    {
      path: "/investments",
      name: "Investments",
      icon: <img src={img_map} alt="mySvgImage" />,
    },
    {
      path: "/creditCards",
      name: "Credit Cards",
      icon: <img src={img_file} alt="mySvgImage" />,
    },
    {
      path: "/loans",
      name: "Loans",
      icon: <img src={img_loans} alt="mySvgImage" />,
    },
    {
      path: "/services",
      name: "Services",
      icon: <img src={img_service} alt="mySvgImage" />,
    },
    {
      path: "/myPrivileges",
      name: "My Privileges",
      icon: <img src={img_lightbulb} alt="mySvgImage" />,
    },
    {
      path: "/settings",
      name: "Settings",
      icon: <img src={img_settings} alt="mySvgImage" />,
    },
  ];

  return props.loading ? (
    <Spinner />
  ) : (
    <div className="container" style={{ width: "100%" }}>
      <div style={{ width: "250px" }} className="sidebar">
        <div className="top_section">
          <img
            style={{ width: "65%", height: "40px", padding: "25px" }}
            src={bank_logo}
            alt="mySvgImage"
          />
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="sidebar-column"
            style={({ isActive }) => ({
              color: isActive ? "#314ca3" : "#888ea2",
              display: "flex",
              height: "60px",
            })}
          >
            {({ isActive }) =>
              isActive ? (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      width: "6px",
                      height: "60px",
                      backgroundColor: "#314ca3",
                      borderBottomRightRadius: "10px",
                      borderTopRightRadius: "10px",
                    }}
                  >
                    {" "}
                  </div>
                  <div className="icon" style={{ paddingLeft: "20px" }}>
                    {item.icon}
                  </div>
                  <div
                    className="link_text"
                    style={{ paddingLeft: "20px", fontSize: "18px" }}
                  >
                    {item.name}
                  </div>
                </div>
              ) : (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      width: "6px",
                      height: "60px",
                    }}
                  >
                    {" "}
                  </div>
                  <div className="icon" style={{ paddingLeft: "20px" }}>
                    {item.icon}
                  </div>
                  <div
                    className="link_text"
                    style={{ paddingLeft: "20px", fontSize: "18px" }}
                  >
                    {item.name}
                  </div>
                </div>
              )
            }
          </NavLink>
        ))}
        <CustomizedDialogs/>

        {/* <Link
          href="#"
          color="inherit"
          onClick={props.logout}
          style={{
            color: "#888ea2",
            display: "flex",
            height: "60px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: "6px",
                height: "60px",
              }}
            >
              {" "}
            </div>
            <div className="icon" style={{ paddingLeft: "20px" }}>
              <LogoutIcon />
            </div>
            <div
              className="link_text"
              style={{ paddingLeft: "20px", fontSize: "18px" }}
            >
              LogOut
            </div>
          </div>
        </Link> */}
      </div>
      <main style={{ width: "80%" }}>{props.children}</main>
      
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  isAuth: state.auth.isAuthenticated,
  user: state.auth.user,
});
export default connect(mapStateToProps, { logout })(Sidebar);
