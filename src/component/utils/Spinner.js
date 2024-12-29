import { CircularProgress } from "@mui/material";
import React from "react";

const Spinner = () => {
  return <div style={{
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  }}>
    <CircularProgress />
  </div>
};

export default Spinner;
