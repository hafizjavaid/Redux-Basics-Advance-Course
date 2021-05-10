import React, { Component } from "react";

import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionTypes from '../../store/actions'
class Counter extends Component {
 

  
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 10" clicked={this.props.onAddCounter} />
        <CounterControl label="Subtract 15" clicked={this.props.onSubCounter} />
        <hr />
        <button onClick={()=> this.props.onStoreResult(this.props.ctr)}>Store Result</button>
        <ul>
          {this.props.storedResults.map((result) => (
            <li key={result.id} onClick={()=> this.props.onDelResult(result.id)}>{result.value}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.rst.results,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => {
      dispatch({ type: actionTypes.INCREMENT });
    },
    onDecrementCounter: () => {
      dispatch({ type: actionTypes.DECREMENT });
    },
    onAddCounter: () => {
      dispatch({ type: actionTypes.ADD, value: 10 });
    },
    onSubCounter: () => {
      dispatch({ type: actionTypes.SUB, value: 15 });
    },
    onStoreResult: (result) => {
      dispatch({ type: actionTypes.STORE_RESULT, result });
    },
    onDelResult: (id) => {
      dispatch({ type: actionTypes.DEL_RESULT,id });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
