import { ADD_CALC_DATA, RESET_CALC_DATA, CALC } from "./actionTypes";

const initialState = {
  history: [],
  calc: "",
  result: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CALC_DATA:
      const { calc } = state;

      return {
        ...state,
        calc: `${calc}${action.payload}`,
        result: null,
      };

    case RESET_CALC_DATA:
      return initialState;

    case CALC:
      const { calc: calc_data, history } = state;

      /* eslint-disable */
      let res = null;

      try {
        res = eval(calc_data);
      } catch (err) {
        res = "error calculation";
      }
      /* eslint-enable */

      return {
        ...state,
        calc: "",
        result: res,
        history: [...history, `${calc_data} = ${res}`],
      };

    default:
      return state;
  }
};

export default reducer;
