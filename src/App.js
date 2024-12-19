
import { useState, useEffect } from "react";
import "./App.css";
import { nanoid } from "nanoid/non-secure";

import FormName from "./components/FormName/FormName";
import ListContacts from "./components/ListContacts/ListContacts";

function App (){
  const [contacts, setContacts] = useState([])

  const addToContacts = (name, number) => {
    const contact = { id: nanoid(), name, number };
    setContacts([...contacts, contact]);
    
    return contacts;
  };

  const deleteContact = (id) => {
    const newContacts = contacts.filter(contact => contact.id !== id)
    setContacts(newContacts)
  }

  useEffect(() => {
    const contactsFromLocalStorage = window.localStorage.getItem("contacts")
    if (contactsFromLocalStorage) {     
      setContacts(JSON.parse(contactsFromLocalStorage))
    }
  },[])

    return (
      <>
        <h1>Phonebook</h1>
        <div>
          <FormName add={addToContacts} data={contacts} />
        </div>
        <ListContacts data={contacts} deleteing={deleteContact} />
      </>
    );
  // }
}

export default App;
