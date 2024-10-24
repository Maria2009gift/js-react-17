import React, { Component } from "react";

class ListContacts extends Component {

    state = {
        filter: "e",
    }

    filterContact = (event) => {
        // console.log(event.currentTarget.value);
    }

  render() {
    const filtered = this.state.filter

    return (
      <>
        <h2>Contacts</h2>
        <input type="text" onChange={this.filterContact}/>
        <ul>
            {     
              this.props.data.contacts.map((contact) => {
                // console.log(filtered);
                // console.log(this.state.filter);
                console.log(filtered);
                
                console.log(contact.name.includes({filtered}));
                
                if (contact.name.includes({filtered})) {
                    
                    
                }
                // console.log();
                
                    return (
                      <li key={contact.id}>
                        <p>{contact.name}</p>
                        <p>{contact.number}</p>
                      </li>
                    )
              })
          }
          
        </ul>
      </>
    );
  }
}

export default ListContacts;
