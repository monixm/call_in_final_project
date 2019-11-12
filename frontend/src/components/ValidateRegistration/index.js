import React, { useState } from "react";
import { connect } from "react-redux";
import { registrationAction } from "../../store/actions/registrationAction";
const ValidateRegistration = props => {
  const [validation_code, setValidationCode] = useState();
  const [email, setEmail] = useState("monika.malecka19@gmail.com");
  const [password, setPassword] = useState("password");
  const [first_name, setFirstName] = useState("monika");
  const [last_name, setLastName] = useState("malecka");
  const validationHandler = e => {
    e.preventDefault();
    const data = props.dispatch(registrationAction(email, password));
    if (data) props.history.push("/login");
  };
  return (
    <div>
      <h4>
        Please enter validation code sent to your email to proceed with login:
      </h4>
      <form action="">
        <input
          type="text"
          value={validation_code}
          onChange={e => setValidationCode(e.currentTarget.value)}
        ></input>
        <input
          type="text"
          value={first_name}
          onChange={e => setFirstName(e.currentTarget.value)}
        ></input>
        <input
          type="text"
          value={last_name}
          onChange={e => setLastName(e.currentTarget.value)}
        ></input>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.currentTarget.value)}
        ></input>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.currentTarget.value)}
        ></input>
        <button onClick={e => validationHandler(e)}>Register</button>
      </form>
    </div>
  );
};
export default connect()(ValidateRegistration);
