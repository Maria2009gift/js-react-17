import React, { Component } from "react";

class FormName extends Component {
  state = {
    name: "",
    number: "",
  };

  addContactToPhonebook = (event) => {  
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.add(this.state.name, this.state.number);
  };
  render() {
    
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.addContactToPhonebook}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.addContactToPhonebook}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default FormName;
