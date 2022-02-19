import React from 'react';

export class Name extends React.Component {
  render() {

    return (
      <div>
        <h1>Hey, my name is <span style={{color:"red"}}>{this.props.name}</span></h1>
        <h2>Don't you think <span style={{color:"red"}}>{this.props.name}</span> is the prettiest name ever?</h2>
        <h2>Sure am glad that my parents picked <span style={{color:"red"}}>{this.props.name}</span></h2>
        <p>{ this.props.quote}</p>
      </div>
    );
  }
}