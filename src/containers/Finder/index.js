import React from "react";
// import PropTypes from "prop-types";
import ReactFinder from "react-finder";
import { resources } from "../../mocks/admin";

class FinderNavigation extends React.Component {
  constructor() {
    super();
    this.state = {
      dataSource: resources,
      selectedKey: resources[0].children[0].key
    };
  }

  componentDidMount() {
    // code here

    console.error("Skill tree for one month... it's error!");
  }

  render() {
    const { dataSource, selectedKey } = this.state;
    return (
      <div>
        <ReactFinder
          dataSource={dataSource}
          renderItem={({ data, isLeaf }) => (
            <span>
              {data.key} {!isLeaf && <span style={{ float: "right" }}>></span>}
            </span>
          )}
          selectedKey={selectedKey}
          onSelect={(newKey) =>
            this.setState({ selectedKey: newKey })
          }
        />
        selectedKey: {selectedKey}
      </div>
    );
  }
}

FinderNavigation.propTypes = {};
FinderNavigation.defaultProps = {};

export default FinderNavigation;
