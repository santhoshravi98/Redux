import React, { Component } from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as ActionTypes from '../../Store/ActionTypes'

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.incrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.decrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.addCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.subtractCounter}
        />
        <hr />
        <button onClick={() =>this.props.showResults(this.props.ctr)}>
          Click Here to Show Results
        </button>
        <ul>
          {this.props.resultsArray.map((iterator) => {
            return <li onClick={() => this.props.deleteResults(iterator.id)} key={iterator.id}>{iterator.value}</li>;
          })}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ctr: state.ctrReducer.counter,
    resultsArray: state.rstReducer.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCounter: () => dispatch({ type: ActionTypes.INC }),
    decrementCounter: () => dispatch({ type: ActionTypes.DEC }),
    addCounter: () => dispatch({ type: ActionTypes.ADD, value: 5 }),
    subtractCounter: () => dispatch({ type: ActionTypes.SUB, value: 5 }),
    showResults: (result) => dispatch({ type: ActionTypes.SHOW,result:result }),
    deleteResults: (id) => dispatch({ type: ActionTypes.DELETE, rowid: id }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
