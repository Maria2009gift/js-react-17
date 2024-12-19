import { useState } from "react";


function FormName ({add}) {
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")


  const addContactToName = (event) => {  
    setName(event.currentTarget.value );
  };

  const addContactToNumber = (event) => {  
    setNumber(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    add(name, number);
  };

    
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={addContactToName}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={addContactToNumber}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  
}

export default FormName;
