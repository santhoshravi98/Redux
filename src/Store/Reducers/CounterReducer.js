import * as actionType from '../ActionTypes'
const initialState = {
  counter: 99
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.INC:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case actionType.DEC:
      return { ...state, counter: state.counter - 1 };
    case actionType.ADD:
      return { ...state, counter: state.counter + action.value };
    case actionType.SUB:
      return { ...state, counter: state.counter - action.value };
  }
  return state;
};
export default Reducer;
