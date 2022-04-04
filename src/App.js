import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./routes/Home/Home";
import CreateModule from "./routes/CreateModule";
import EmployeeList from "./routes/EmployeeList";

function App() {
  return (
    <div className="container">
      <Router>
        <div className="col-md-12">
          <h1 className="text-center" style={style}></h1>
          <Switch>
            <Route path="/" exact component={CreateModule} />
            <Route path="/home" component={Home} />
            <Route path="/create-module" component={CreateModule} />
            <Route path="/employee-list" component={EmployeeList} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

const style = {
  color: "red",
  margin: "10px",
};

export default App;
