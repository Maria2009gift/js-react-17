import React, { Component } from "react";
import "./App.css";
import { nanoid } from "nanoid/non-secure";

import FormName from "./components/FormName/FormName";
import ListContacts from "./components/ListContacts/ListContacts";

class App extends Component {
  state = {
    contacts: [    
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    
  };

  addToContacts = (name, number) => {
    const contact = { id: nanoid(), name, number };
    this.setState(({ contacts }) => {
      return {
        contacts: [...contacts, contact],
      };
    });
    console.log(this.state.contacts);

    return this.state.contacts;
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <div>
          <FormName add={this.addToContacts} />
        </div>
        <ListContacts data={this.state} />
      </>
    );
  }
}

export default App;
