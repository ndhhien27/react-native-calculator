export const initialState = {
  currentValue: "0",
  operator: null,
  previousValue: null,
  arrResult: []
};

const handleNumber = (value, state) => {
  if (state.currentValue === "0") {
    return { currentValue: `${value}` };
  }

  return {
    currentValue: `${state.currentValue}${value}`
  };
};

export const handleEqual = state => {
  const { currentValue, previousValue, operator, arrResult } = state;

  const current = parseFloat(currentValue);
  const previous = parseFloat(previousValue);
  const input = `${previous}${operator}${current}=`;
  const resetState = {
    operator: null,
    previousValue: null
  };

  if (operator === "/") {
    return {
      ...state,
      currentValue: previous / current,
      ...resetState,
      arrResult: [input + `${previous / current}`, ...arrResult]
    };
  }

  if (operator === "*") {
    return {
      currentValue: previous * current,
      ...resetState,
      arrResult: [input + `${previous * current}`, ...arrResult]
    };
  }

  if (operator === "+") {
    return {
      currentValue: previous + current,
      ...resetState,
      arrResult: [input + `${previous + current}`, ...arrResult]
    };
  }

  if (operator === "-") {
    return {
      currentValue: previous - current,
      ...resetState,
      arrResult: [input + `${previous - current}`, ...arrResult]
    };
  }

  // result = `${previous}${operator}${current}${currentValue}`;

  return state;
};

const calculator = (type, value, state) => {
  switch (type) {
    case "number":
      return handleNumber(value, state);
    case "operator":
      return {
        operator: value,
        previousValue: state.currentValue,
        currentValue: "0"
      };
    case "equal":
      return handleEqual(state);
    case "clear":
      return initialState;
    case "posneg":
      return {
        currentValue: `${parseFloat(state.currentValue) * -1}`
      };
    case "percentage":
      return {
        currentValue: `${parseFloat(state.currentValue) * 0.01}`
      };
    default:
      return state;
  }
};

export default calculator;
