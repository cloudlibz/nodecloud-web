import React from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import { history } from "../_helpers/history.js";
import { alertActions } from "../_actions/alert.actions.js";
import { PrivateRoute } from "../_components/PrivateRoute.js";
import { HomePage } from "../HomePage/HomePage.js";
import { LoginPage } from "../LoginPage/LoginPage.js";
import { SignupPage } from "../SignupPage/SignupPage.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }
  render() {
    console.log("In app.js");
    const { alert } = this.props;
    return (
      <div>
        {alert.message && (
          <div className={`ui ${alert.type} message`}>{alert.message}</div>
        )}
        <Router history={history}>
          <PrivateRoute exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/signup" component={SignupPage} />
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
