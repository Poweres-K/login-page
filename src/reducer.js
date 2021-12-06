export const reducer = (state, action) => {
  if (action.type === "TEXT_CHANGE") {
    return {
      ...state,
      [action.payload.fieldName]: action.payload.fieldValue,
    };
  }

  if (action.type === "TRIGGER_TERM") {
    return {
      ...state,
      termAccepted: action.payload,
    };
  }
};
