import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { history } from "../_helpers/history.js";
import { alertActions } from "../_actions/alert.actions.js";
import { PrivateRoute } from "../_components/PrivateRoute.js";
import { HomePage } from "../HomePage/HomePage.js";
import { LoginPage, SignupPage } from "../Auth";
import { VirtualMachine } from "../CreateServices/VirtualMachine.js";
import { VirtualNetwork } from "../CreateServices/VirtualNetwork.js";
import { Database } from "../CreateServices/Database.js";
import { Security } from "../CreateServices/Security.js";
import { PageNotFound } from "../_helpers/PageNotFound.js";

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
    const { alert } = this.props;
    return (
      <div>
        {alert.message && (
          <div className={`ui ${alert.type} message`}>{alert.message}</div>
        )}
        <Router history={history}>
          <Switch>
            <PrivateRoute exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <PrivateRoute path="/home" component={HomePage} />
            <Route path="/signup" component={SignupPage} />
            <PrivateRoute path="/virtualmachines" component={VirtualMachine} />
            <PrivateRoute path="/virtualnetworks" component={VirtualNetwork} />
            <PrivateRoute path="/database" component={Database} />
            <PrivateRoute path="/security" component={Security} />
            <PrivateRoute component={PageNotFound} />
          </Switch>
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
