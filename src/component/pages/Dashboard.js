import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

import {
  TextField,
  InputAdornment,
  IconButton,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { LineChart } from "@mui/x-charts/LineChart";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";

import card_logo from "../sidebar-logo/card-logo.svg";
import chipcard from "../sidebar-logo/chipcard.png";
import card_1 from "../sidebar-logo/card-1.png";
import card_2 from "../sidebar-logo/card-2.png";
import card_3 from "../sidebar-logo/card-3.png";
import trans_1 from "../sidebar-logo/trans_1.svg";
import trans_2 from "../sidebar-logo/trans_2.svg";
import trans_3 from "../sidebar-logo/trans_3.svg";
import { connect } from "react-redux";
import Nav from "../utils/Nav";

function Dashboard(props) {
  const profile = [
    {
      path: card_1,
      name: "Livia Bator",
      position: "CEO",
    },
    {
      path: card_2,
      name: "Randy Press",
      position: "Director",
    },
    {
      path: card_3,
      name: "Workman",
      position: "Designer",
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
  console.log(props.isAuth);

  if (!props.isAuth) {
    return <Navigate to="/login" />;
  }

  return (
    <div style={{alignItems: "center", justifyContent:"center",width: "100%"}} className="dashBoard">
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
          borderWidth: "0.2px"
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
          Overview
        </div>
        <Nav />
      </div>
      <div
        className="container"
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          display: "flex",
          width: "100%",
          flexDirection: isMobile ? "column" : "row",
          marginTop: "20px",
        }}
      >
        <div style={{ width: isMobile ? "100%" : "68%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingLeft: "20px",
            }}
          >
            <div>My Cards</div>
            <div style={{ fontSize: "18px" }}>See All</div>
          </div>
          <div
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "space-between",
            }}
          >
            <div
              className="card"
              style={{
                width: isMobile ? "90%" : "48%",
                height: "300px",
                margin: "20px",
                color: "#ffffff",
                fontWeight: "400",
                fontSize: "18px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "50%",
                  backgroundColor: "#314ca3",
                  justifyContent: "space-between",
                  padding: "20px",
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                }}
              >
                <div
                  style={{ justifyContent: "space-between", display: "flex" }}
                >
                  <div style={{ fontFamily: "Lato" }}>
                    <div style={{ fontSize: "12px" }}>Balance</div>
                    <div style={{ fontSize: "20px", fontFamily: "Inter" }}>
                      $5,755
                    </div>
                  </div>
                  <img
                    style={{ height: "34px" }}
                    src={chipcard}
                    alt="mySvgImage"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    fontSize: "12px",
                  }}
                >
                  <div style={{ width: "50%" }}>
                    <div style={{ color: "#ffffffb2" }}>CARD HOLDER</div>
                    <div>{props.user.name}</div>
                  </div>
                  <div>
                    <div style={{ color: "#ffffffb2" }}>VALID THRU</div>
                    <div>12/22</div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  height: "20%",
                  display: "flex",
                  padding: "20px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottomLeftRadius: "20px",
                  borderBottomRightRadius: "20px",
                  backgroundColor: "#8e9ed6",
                }}
              >
                <div>3243 **** **** 1234</div>
                <div>
                  <img
                    style={{ height: "34px" }}
                    src={card_logo}
                    alt="mySvgImage"
                  />
                </div>
              </div>
            </div>

            <div
              className="card"
              style={{
                width: isMobile ? "90%" : "48%",
                height: "300px",
                margin: "20px",
                color: "#ffffff",
                fontWeight: "400",
                fontSize: "18px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "50%",
                  backgroundColor: "#314ca3",
                  justifyContent: "space-between",
                  padding: "20px",
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                }}
              >
                <div
                  style={{ justifyContent: "space-between", display: "flex" }}
                >
                  <div style={{ fontFamily: "Lato" }}>
                    <div style={{ fontSize: "12px" }}>Balance</div>
                    <div style={{ fontSize: "20px", fontFamily: "Inter" }}>
                      $56,786
                    </div>
                  </div>
                  <img
                    style={{ height: "34px" }}
                    src={chipcard}
                    alt="mySvgImage"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    fontSize: "12px",
                  }}
                >
                  <div style={{ width: "50%" }}>
                    <div style={{ color: "#ffffffb2" }}>CARD HOLDER</div>
                    <div>{props.user.name}</div>
                  </div>
                  <div>
                    <div style={{ color: "#ffffffb2" }}>VALID THRU</div>
                    <div>12/22</div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  height: "20%",
                  display: "flex",
                  padding: "20px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottomLeftRadius: "20px",
                  borderBottomRightRadius: "20px",
                  backgroundColor: "#8e9ed6",
                }}
              >
                <div>7644 **** **** 4223</div>
                <div>
                  <img
                    style={{ height: "34px" }}
                    src={card_logo}
                    alt="mySvgImage"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            paddingLeft: "20px",
            maxWidth: "100%",
            width: isMobile ? "100%" : "32%",
          }}
        >
          Recent Transaction
          <List
            sx={{
              alignItems: "center",
              margin: "20px",
            }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={trans_1} />
              </ListItemAvatar>
              <ListItemText
                primary="Deposit from my Card"
                secondary={" 28 January 2021"}
              />
              <ListItemText
                primary="+$567,400"
                sx={{
                  margin: "auto",
                  textAlign: "end",
                  color: "green",
                }}
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="" src={trans_2} />
              </ListItemAvatar>
              <ListItemText
                primary="Deposit Paypal"
                secondary={"25 January 2021"}
              />
              <ListItemText
                primary="+$5,400"
                sx={{
                  margin: "auto",
                  textAlign: "end",
                  color: "green",
                }}
              />
            </ListItem>

            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src={trans_3} />
              </ListItemAvatar>
              <ListItemText
                primary="Jemi Wilson"
                secondary={"21 January 2021"}
              />
              <ListItemText
                primary="-$5,98,400"
                sx={{
                  margin: "auto",
                  textAlign: "end",
                  color: "red",
                }}
              />
            </ListItem>
          </List>
        </div>
      </div>
      <div
        className="container"
        style={{
          justifyContent: "space-between",
          display: "felx",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <div style={{ paddingLeft: "20px" }}>
          Weekly Activity
          <div style={{ padding: "28", margin: "22px", width: "100%" }}>
            <BarChart
              xAxis={[
                {
                  id: "linearAxis",
                  scaleType: "band",
                  data: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
                  categoryGapRatio: 0.6,
                  barGapRatio: 0.9,
                },
              ]}
              legend={{
                direction: "row",
              }}
              yAxis={[
                {
                  id: "yaxis",
                },
              ]}
              series={[
                {
                  data: [500, 200, 450, 250, 300, 450, 250],
                  label: "Diposit",
                  color: "#314ca3",
                  type: "bar",
                },
                {
                  data: [450, 300, 425, 200, 330, 250, 300],
                  label: "Withdraw",
                  color: "#8e9ed6",
                },
              ]}
              height={350}
              leftAxis={{
                axisId: "yaxis",
                disableLine: true,
                disableTicks: true,
              }}
              bottomAxis={{
                axisId: "linearAxis",
                disableLine: true,
                disableTicks: true,
              }}
            />
          </div>
        </div>
        <div
          style={{
            fontSize: "22px",
            fontFamily: "Inter",
            backgroundColor: "#ffffff",
            width: isMobile ? "100%" : "32%",
            paddingLeft: "20px",
          }}
        >
          Expense Statistics
          <PieChart
            series={[
              {
                arcLabel: (item) => ` ${item.value}% ${item.label}`,
                data: [
                  {
                    id: 0,
                    value: 30,
                    label: "Entertainment",
                    color: "#314ca3",
                  },
                  { id: 1, value: 25, label: "Bill Expense", color: "#425ebd" },
                  { id: 2, value: 20, label: "Investment", color: "#8e9ed6" },
                  { id: 3, value: 25, label: "Others", color: "#c6cfeb" },
                ],

                innerRadius: 8,
                outerRadius: 140,
                cornerRadius: 0,
                paddingAngle: 1,
                cx: 150,
                cy: 200,
              },
            ]}
            sx={{
              [`& .${pieArcLabelClasses.root}`]: {
                fill: "white",
                fontWeight: "bold",
                fontSize: "11px",
              },
              width: "100%",
            }}
            legend={false}
            width={350}
            height={400}
          />
        </div>
      </div>
      <div
        className="container"
        style={{
          width: "100%",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: isMobile ? "100%" : "55%",
            paddingLeft: "20px",
          }}
        >
          Quick Transfer
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ display: "flex" }}>
                {profile.map((item, index) => (
                  <Card sx={{ margin: "20px" }}>
                    <CardActionArea>
                      <Avatar
                        alt="Livia Bator"
                        src={item.path}
                        sx={{
                          width: 60,
                          height: 60,
                          margin: "auto",
                          marginTop: "10px",
                        }}
                      />
                      <CardContent>
                        <Typography
                          sx={{
                            fontFamily: "Inter",
                            fontWeight: "700",
                            fontSize: "16px",
                            color: "#2943a1",
                          }}
                        >
                          {item.name}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Inter",
                            fontWeight: "700",
                            fontSize: "15px",
                            color: "#888ea2",
                          }}
                        >
                          {item.position}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                ))}
              </div>
              <IconButton style={{ margin: "auto", height: "50px" }}>
                <ChevronRightOutlinedIcon
                  sx={{ width: "50px", height: "50px" }}
                />
              </IconButton>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "Inter",
                  fontWeight: "400",
                  fontSize: "16px",
                  color: "#888ea2",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: "20px",
                }}
              >
                <div>Write Amount</div>
                <div>
                  <TextField
                    placeholder="Enter Amount"
                    sx={{
                      width: 300,
                      border: "none",
                      "& fieldset": { border: "none" },
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Button
                            variant="contained"
                            size="medium"
                            sx={{
                              backgroundColor: "#343c6a",
                              borderRadius: "20px",
                              fontFamily: "Inter",
                              fontWeight: "400",
                              fontSize: "16px",
                              color: "#ffffff",
                              width: "125px",
                            }}
                          >
                            Send
                          </Button>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            paddingLeft: "20px",
          }}
        >
          Balance History
          <LineChart
            xAxis={[
              {
                id: "linearAxis",
                scaleType: "point",
                data: [
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                ],
              },
            ]}
            yAxis={[
              {
                id: "yaxis",
              },
            ]}
            series={[
              {
                data: [
                  400, 270, 800, 250, 400, 467, 300, 450, 764, 300, 500, 360,
                ],
                color: "#314ca3",
                showMark: false,
                // area: true,
              },
            ]}
            sx={{ width: "100%" }}
            height={300}
            bottomAxis={{ axisId: "linearAxis", disableLine: true }}
            leftAxis={{ axisId: "yaxis", disableLine: true }}
          />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  isAuth: state.auth.isAuthenticated,
  user: state.auth.user,
});
export default connect(mapStateToProps)(Dashboard);
