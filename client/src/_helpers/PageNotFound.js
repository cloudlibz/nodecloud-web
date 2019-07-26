import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import "../LoginPage/LoginPage.css";

class PageNotFound extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="main">
        <div>
          <Icon name="search" color="blue" size="big" />
          <h1>404 Page Not Found!</h1>
          <Link to="/home" class="ui primary button">
            Go to Home
          </Link>
        </div>
      </div>
    );
  }
}

export { PageNotFound };
