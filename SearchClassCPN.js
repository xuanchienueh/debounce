import React, { Component } from 'react';
export default class SearchClassCPN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueSearch: '',
    };
  }

  handleChange = debounceClassCpn((e) => {
    console.log(e.target.value);
  }, 2000);

  render() {
    return (
      <div>
        <input
          value={this.state.valueSearch}
          style={{ border: '1px solid red' }}
          type="text"
          onChange={(e) => {
            this.handleChange(e);
            this.setState({ valueSearch: e.target.value });
          }}
        />
      </div>
    );
  }
}

export function debounceClassCpn(func, wait) {
  let timeout;

  return function () {
    let context = this,
      args = arguments;

    let executeFunction = function () {
      func.apply(context, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(executeFunction, wait);
  };
}
