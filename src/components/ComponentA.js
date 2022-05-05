import React, { Component } from "react";
class ComponentA extends Component {
  constructor() {
    super();
    this.state = {
      isLinkedIn: false,
    };
  }
  render() {
    return this.state.isLinkedIn ? (<div>shashi</div>) : (<div>arjun</div>)

    
  }
}
export default ComponentA;
