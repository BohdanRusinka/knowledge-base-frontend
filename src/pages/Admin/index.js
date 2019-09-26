import React from "react";
// import PropTypes from "prop-types";

import { Finder } from "../../containers";

class Admin extends React.Component {
  componentDidMount() {
    // code here

    console.error("Skill tree for one month... it's error!");
  }

  render() {
    return (
      <div>
        <Finder />;
      </div>
    );
  }
}

Admin.propTypes = {};
Admin.defaultProps = {};

export default Admin;
