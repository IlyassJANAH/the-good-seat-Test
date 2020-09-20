import React from 'react';
import { BrowserRouter as Router, Route }from "react-router-dom";
import HomePage from "./HomePage";
import SignUp from "./SignUp"
import Login from "./Login"
import SearchCourses from "./SearchCourses";

export const Main = ()=>(
    <Router >
            <div>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={SignUp}/>
                <Route exact path="/search" component={SearchCourses}/>

                {/*<Route exact path="/signup" component={ConnectedSignup}/>
                <Route exact
                       path="/dashboard"
                       render={RouteGuard(ConnectedDashboard)}/>

                <Route exact
                       path="/task/:id"

                       render={RouteGuard(ConnectedTaskDetail)} />*/}
            </div>
    </Router>
);
