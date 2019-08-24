import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class Signin extends Component {
  renderInput(field) {
    return (
      <input className="form-control" {...field.input} type="field.type" />
    );
  }

  handleFormSubmit = function() {
    console.log("Trying to handle form submit");
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <label htmlFor="email">Email</label>
          <Field name="email" component={this.renderInput} type="text" />
          <label htmlFor="password">Password</label>
          <Field name="password" component={this.renderInput} type="password" />

          <button action="submit">Sign In</button>
        </form>
      </div>
    );
  }
}
export default reduxForm({ form: "signin" })(Signin);
