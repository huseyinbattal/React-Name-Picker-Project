import React from "react";
import { Select } from "./Select";
import { Name } from "./Name";

export class App extends React.Component {
  state = {
    name: "Abella",
    quote: "",
    newNames: [],
  };

  getName = (nameParameter) => {
    this.setState({ name: nameParameter });
  };

  getQuote = (quoteParameter) => {
    this.setState({ quote: quoteParameter });
  };

  fetchNames = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ newNames: data }));
  };

  componentDidMount() {
    this.fetchNames();
  }

  render() {
    console.log(this.state.name);
    console.log(this.state.quote);

    return (
      <div>
        <Select
          getName={this.getName}
          getQuote={this.getQuote}
          newNames={this.state.newNames}
        />
        <Name name={this.state.name} quote={this.state.quote} />
      </div>
    );
  }
}
