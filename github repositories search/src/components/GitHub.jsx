import React from "react";
import UserResults from "./UserResults";
import UserInput from "./UserInput";

export default class GitHub extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  handleOnResponse = (user) => {
    this.setState({ user });
  };

  handleOnReset = () => {
    this.setState({ user: null });
  };

  render() {
    return (
      <div>
        {!this.state.user && <UserInput onResponse={this.handleOnResponse} />}
        {this.state.user && (
          <UserResults
            user={this.state.user}
            onReset={() => this.handleOnReset()}
          />
        )}
      </div>
    );
  }
}
