import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Container} from "semantic-ui-react";
import { IActivity } from "../models/activity";
import { NavBar } from "../../features/nav/NavBar";
import { ActivityDashboard } from "../../features/activities/dashboard/ActivityDashboard";

interface IState {
  activities: IActivity[];
}

const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);

  useEffect(() => {
    axios
      .get<IActivity[]>("http://localhost:5000/api/activities")
      .then((response) => {
        setActivities(response.data);
      });
    //empty array sprjecava ponovno izvrsavanje axios.get activity
  }, []);

  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard activities = {activities}/>
      </Container>
    </Fragment>
  );
};
export default App;
