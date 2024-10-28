import React, { Component } from "react";

class ListContacts extends Component {

    state = {
      filter: "",
    }

    handleFilter = (event)=>{
      this.setState({filter: event.currentTarget.value})
    }

    getVisibleTasks = () =>{
      return this.props.data.contacts.filter((contact) => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
    }
    

  render() {
    const visible = this.getVisibleTasks()

    return (
      <>
        <h2>Contacts</h2>
        <input type="text" onChange={this.handleFilter}  value={this.state.filter}/>
        <ul>
            {     
              visible.map((contact) => {

                    return (
                      <li key={contact.id}>
                        <p>{contact.name}: {contact.number}</p>
                        <button type='button' onClick={() => {this.props.deleteing(contact.id)}}>Delete</button>
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
