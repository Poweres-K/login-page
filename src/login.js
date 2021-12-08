import React, { useReducer, useEffect, useRef } from "react";
import { reducer } from "./reducer";
import defaultData from "./data";

const LoginCard = () => {
  const SubmitBtn = useRef(null);
  const form = useRef(null);
  const mainLogIn = useRef(null);
  const [state, dispatch] = useReducer(reducer, defaultData);

  useEffect(() => {
    for (let key of Object.keys(state)) {
      if (!state[key]) {
        SubmitBtn.current.disabled = true;
        return;
      }
    }
    SubmitBtn.current.disabled = false;
  }, [state]);
  useEffect(() => {
    console.log(form.current.offsetHeight);
  }, []);
  const handleChange = (e) => {
    dispatch({
      type: "TEXT_CHANGE",
      payload: { fieldName: e.target.name, fieldValue: e.target.value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert(`${state.name} ,You are registered with ${state.email}`);
  };
  return (
    <div className="main-login" useRef={mainLogIn}>
      <h3>Register</h3>
      <form className="form-control" onSubmit={handleSubmit} ref={form}>
        <div className="input-box">
          <input
            autoComplete="off"
            type="text"
            name="name"
            placeholder="name"
            value={state.name}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <input
            autoComplete="off"
            type="email"
            name="email"
            placeholder="email"
            value={state.email}
            onChange={handleChange}
          />
        </div>

        <div className="input-box">
          <input
            type="password"
            name="password"
            placeholder="password"
            value={state.password}
            onChange={handleChange}
          />
        </div>

        <div className="input-box">
          <input
            type="password"
            name="passwordRepeat"
            placeholder="password repeat"
            value={state.passwordRepeat}
            onChange={handleChange}
          />
        </div>

        <div className="check-box">
          <label htmlFor="termAccepted">
            <input
              type="checkbox"
              id="termAccepted"
              value={state.termAccepted}
              onChange={() =>
                dispatch({
                  type: "TRIGGER_TERM",
                  payload: !state.termAccepted,
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
