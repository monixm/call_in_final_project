import { connect } from "react-redux";
import React, { useState } from "react";
//import "./style.css";
import { registrationAction } from "../../store/actions/registrationAction";
const Registration = props => {
  const [email, setEmail] = useState("monika.malecka19@gmail.com");
  const userLoginHandler = e => {
    e.preventDefault();
    const data = props.dispatch(registrationAction(email));
    if (data) props.history.push("/validate");
  };
  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={userLoginHandler}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.currentTarget.value)}
        ></input>
        <button onClick={e => userLoginHandler(e)}>Register your email</button>
      </form>
    </div>
  );
};
export default connect()(Registration);
