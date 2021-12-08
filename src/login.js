import React, { useReducer, useEffect, useRef } from "react";
import { reducer } from "./reducer";
import defaultData from "./data";
import InputField from "./inputField";

const LoginCard = () => {
  const SubmitBtn = useRef(null);
  const [state, dispatch] = useReducer(reducer, defaultData);

  useEffect(() => {
    for (let key of Object.keys(state)) {
      if (!state[key].value) {
        SubmitBtn.current.disabled = true;
        return;
      }
    }
    SubmitBtn.current.disabled = false;
  }, [state]);

  const handleChange = (e) => {
    dispatch({
      type: "TEXT_CHANGE",
      payload: { fieldName: e.target.name, fieldValue: e.target.value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert(
      `${state.name.value} ,You are registered with ${state.email.value}`
    );
  };

  return (
    <div className="main-login">
      <h3>Register</h3>
      <form className="form-control" onSubmit={handleSubmit}>
        {Object.keys(state).map((key) => {
          if (key !== "termAccepted") {
            return (
              <InputField
                {...state[key]}
                key={state[key].id}
                handleChange={handleChange}
              />
            );
          }
        })}

        <div className="check-box">
          <label htmlFor="termAccepted">
            <input
              type="checkbox"
              id="termAccepted"
              value={state.termAccepted}
              onChange={() =>
                dispatch({
                  type: "TRIGGER_TERM",
                  payload: !state.termAccepted.value,
                })
              }
            />
            Accept term and condition
          </label>
        </div>

        <button ref={SubmitBtn}>Register</button>
      </form>
    </div>
  );
};

export default LoginCard;
