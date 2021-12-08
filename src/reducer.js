export const reducer = (state, action) => {
  if (action.type === "TEXT_CHANGE") {
    return {
      ...state,
      [action.payload.fieldName]: {
        ...state[action.payload.fieldName],
        value: action.payload.fieldValue,
      },
    };
  }

  if (action.type === "TRIGGER_TERM") {
    return {
      ...state,
      termAccepted: { ...state.termAccepted, value: action.payload },
    };
  }
};
