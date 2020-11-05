import * as actionType from '../ActionTypes'
const initialState = {
  results: []
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SHOW:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result }),
      };
    case actionType.DELETE: {
      return {
        ...state,
        results: state.results.filter((iterator) => {
            return iterator.id !== action.rowid
        })
      };
    }
  }
  return state;
};
export default Reducer;
