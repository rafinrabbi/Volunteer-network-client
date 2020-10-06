import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import ActivityDetails from "./components/ActivityDetails/ActivityDetails";
import AddEvent from "./components/AddEvent/AddEvent";
import AdminList from "./components/AdminList/AdminList";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SelectedActivities from "./components/SelectedActivities/SelectedActivities";
import VolunteerRegister from "./components/VolunteerRegister/VolunteerRegister";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>Name: {loggedInUser.name}</p>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/volunteerRegister/:activityId">
            <VolunteerRegister></VolunteerRegister>
          </PrivateRoute>
          <Route path="/activity/:activityId">
            <ActivityDetails></ActivityDetails>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/admin">
            <AdminList></AdminList>
          </Route>
          <Route path="/addEvent">
            <AddEvent></AddEvent>
          </Route>
          <Route path="/selectedActivities">
            <SelectedActivities></SelectedActivities>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
