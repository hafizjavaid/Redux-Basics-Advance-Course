import React, { Component } from "react";

import { connect } from "react-redux";
// import {increment} from '../../store/actions/actions'
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionCreators from "../../store/actions/index";
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
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Store Result
        </button>
        <ul>
          {this.props.storedResults.map((result) => (
            <li
              key={result.id}
              onClick={() => this.props.onDelResult(result.id)}
            >
              {result.value}
            </li>
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
      dispatch(actionCreators.increment());
    },
    onDecrementCounter: () => {
      dispatch(actionCreators.decrement());
    },
    onAddCounter: () => {
      dispatch(actionCreators.add(10));
    },
    onSubCounter: () => {
      dispatch(actionCreators.subtract(15));
    },
    onStoreResult: (result) => {
      dispatch(actionCreators.storeResult(result));
    },
    onDelResult: (id) => {
      dispatch(actionCreators.delResult(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
