import React from "react";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.updateEmailField = this.updateEmailField.bind(this);
    this.updatePasswordField = this.updatePasswordField.bind(this);
    this.updatePasswordbisField = this.updatePasswordbisField.bind(this);
    this.updateNameField = this.updateNameField.bind(this);
    this.updateLastnameField = this.updateLastnameField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: "louis@wild.com",
      password: "wild",
      passwordbis: "wild",
      name: "louis",
      lastname: "Dufourmantelle",
    };
  }

  updateEmailField(event) {
    this.setState({ email: event.target.value });
  }

  updatePasswordField(event) {
    this.setState({ password: event.target.value });
  }

  updatePasswordbisField(event) {
    this.setState({ passwordbis: event.target.value });
  }

  updateNameField(event) {
    this.setState({ name: event.target.value });
  }

  updateLastnameField(event) {
    this.setState({ lastname: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>{JSON.stringify(this.state, 1, 1)}</h1>
        <form onSubmit={this.handleSubmit} className="form">
          <label htmlFor="email">Email:</label>
          <input
            className="input"
            onChange={this.updateEmailField}
            id="email"
            type="email"
            name="email"
          />
          <label htmlFor="password">Password:</label>
          <input
            className="input"
            onChange={this.updatePasswordField}
            id="password"
            type="password"
            name="password"
          />
          <label htmlFor="passwordbis">Password bis:</label>
          <input
            className="input"
            onChange={this.updatePasswordbisField}
            id="passwordbis"
            type="password"
            name="passwordbis"
          />
          <label htmlFor="name">Name:</label>
          <input
            className="input"
            onChange={this.updateNameField}
            id="name"
            type="name"
            name="name"
          />
          <label htmlFor="lastname">Lastname:</label>
          <input
            className="input"
            onChange={this.updateLastnameField}
            id="lastname"
            type="lastname"
            name="lastname"
          />
          <input type="submit" value="Soumettre" />
        </form>
      </div>
    );
  }
}

export default SignUp;
