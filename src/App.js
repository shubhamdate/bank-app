import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import store from "./store";
import "./app.css";

import { loadUser } from "./actions/auth";
import Register from "./component/pages/Register";
import Login from "./component/pages/Login";
import Sidebar from "./component/pages/Sidebar";
import Dashboard from "./component/pages/Dashboard";
import Transactions from "./component/pages/Transactions";
import Accounts from "./component/pages/Accounts";
import Investments from "./component/pages/Investments";
import CreditCards from "./component/pages/CreditCards";
import Loans from "./component/pages/Loans";
import Services from "./component/pages/Services";
import MyPrivileges from "./component/pages/MyPrivileges";
import Settings from "./component/pages/Settings";

function App(props) {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <BrowserRouter>
      {props.isAuth ? (
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/investments" element={<Investments />} />
            <Route path="/creditCards" element={<CreditCards />} />
            <Route path="/loans" element={<Loans />} />
            <Route path="/services" element={<Services />} />
            <Route path="/myPrivileges" element={<MyPrivileges />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </Sidebar>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}
const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  isAuth: state.auth.isAuthenticated,
  user: state.auth.user,
});
export default connect(mapStateToProps)(App);
