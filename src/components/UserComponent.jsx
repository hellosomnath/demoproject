import React, { Component } from "react";
import axios from "axios";
import "./user.css";

class UserComponent extends React.Component {
  state = {
    users: [],
  };

  componentDidMount = () => {
    axios.get("http://localhost/restapi/api/user").then((response) => {
      this.setState({ users: response.data });
    });
  };
  render() {
    const c = this.state.users.length;
    return (
      <div>
        <h4>Users</h4> <hr />
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          {c > 0 ? (
            this.state.users.map((user, index) => (
              <tbody>
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    {user.first_name} {user.last_name}
                  </td>
                  <td>{user.email}</td>
                </tr>
              </tbody>
            ))
          ) : (
            <tbody>
              <tr>
                <td colSpan="100%">no data found</td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    );
  }
}

export default UserComponent;
