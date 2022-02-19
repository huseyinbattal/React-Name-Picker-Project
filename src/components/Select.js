import React from "react";
import { names } from "./names";
import {wishes} from "./wishes";


export class Select extends React.Component {
  handleSelect = (event) => {
    console.log(event.target.value);
    this.props.getName(event.target.value);

    let random=Math.floor(Math.random()*wishes.length)
    this.props.getQuote(wishes[random]);

  };
  render() {
    return (
      <div>
        <h1>Pickup a name :</h1>
        <select style={{fontSize:"20px", color:"green"}} id="great-names" onChange={this.handleSelect}>
          {names.map((name,index) => {
          return <option  key={index}  value={name}>{name}</option>
            
          })}
          {/* <option value="Philomena">Philomena</option>
          <option value="Rhythm">Rhythm</option> */}
        </select>

        <select style={{fontSize:"20px", color:"green"}} id="new-names" onChange={this.handleSelect}>
          {this.props.newNames.map((item,index) => {
          return <option  key={index}  value={item.name}>{item.name}</option>
            
          })}
          {/* <option value="Philomena">Philomena</option>
          <option value="Rhythm">Rhythm</option> */}
        </select>
      </div>
    );
  }
}
