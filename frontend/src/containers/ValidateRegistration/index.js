import React, { useState } from "react";
import { connect } from "react-redux";
import { validateRegistrationAction } from "../../store/actions/validateRegistrationAction";

const ValidateRegistration = props => {
  const [validation_code, setValidationCode] = useState("code");
  const [email, setEmail] = useState("email");
  const [password, setPassword] = useState("password");
  const [passwordConfirm, setPasswordConfirm] = useState("password");
  const [first_name, setFirstName] = useState("first_name");
  const [last_name, setLastName] = useState("last_name");

  const validationHandler =async e => {
    e.preventDefault();
    const data = await validateRegistrationAction({email, password, first_name, last_name, password_repeat: password, code: validation_code});
    if (data) props.history.push("/");
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
        <input
          type="password"
          value={passwordConfirm}
          onChange={e => setPasswordConfirm(e.currentTarget.value)}
        ></input>
        {password === passwordConfirm ? (
          <button onClick={e => validationHandler(e)}>Register</button>
        ) : (
          <div>
            <button disabled>Register</button> <p>Passwords must match!</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default connect()(ValidateRegistration);
