import React from "react";
import Header from "./header";
import Footer from "./footer";
import Accounts from "./accounts";

import userAccountDataFormatter from "../utilities/dataFormatters";

class Main extends React.Component {
  // TODO: 
  // If a search bar were implemented then it would be a good 
  // idea to have a search object within state that contained
  // returned results from a user input
  // Add some other filter functionality to get results by due date, name, email, phone etc...
  constructor() {
    super();
    this.state = {
      data: null
    };
  }
// TODO:
// Incorporate Redux and move fetch call to an action to populate the store
  getUsers() {
    let data = fetch(
      "https://frontiercodingtests.azurewebsites.net/api/accounts/getall"
    )
      .then(response => response.json())
      .then(data => this.setState({ data: userAccountDataFormatter(data) }));
    return data;
  }

  componentDidMount() {
    this.getUsers();
  }
  // TODO: 
  // Have some sort of check that validates a user and routing to render the correct view
  // for this challenge the Accounts view is defaulted here. Most likely not always going to 
  // render the accounts, but other views as well
  // Add some sort of loader state
  render() {
    return (
      <article className="grid">
        <Header title={"Frontier"} />
        <Accounts userData={this.state.data} />
        <Footer />
      </article>
    );
  }
}

export default Main;
