import React, { Component } from "react";
import FriendComponent from "./FriendComponent";
import { connect } from "react-redux";
import { getFriends } from "../actions/actions";
import { Row, Col } from "reactstrap";

class FriendListComponent extends Component {
  render() {
    return (
      <Row>
        {this.props.friends.map(friend => (
          <Col md={6}>
            <FriendComponent friend={friend} />
          </Col>
        ))}
      </Row>
    );
  }

  componentDidMount() {
    this.props.getFriends();
  }
}
const mapStateToProps = state => {
  return {
    friends: state.friends,
    adding: state.adding,
    updating: state.updating,
    deleting: state.deleting
  };
};

export default connect(mapStateToProps, { getFriends })(FriendListComponent);
