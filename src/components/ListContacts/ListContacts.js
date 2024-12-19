import { useState } from "react";

function ListContacts ({data, deleteing}) {

  const [filter, setFilter] = useState("")

    const handleFilter = (event)=>{
      setFilter(event.currentTarget.value)
    }

    const getVisibleTasks = () =>{
      return data.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
    }
    
    const visible = getVisibleTasks()

    return (
      <>
        <h2>Contacts</h2>
        <input type="text" onChange={handleFilter}  value={filter}/>
        <ul>
            {     
              visible.map((contact) => {

                    return (
                      <li key={contact.id}>
                        <p>{contact.name}: {contact.number}</p>
                        <button type='button' onClick={() => {deleteing(contact.id)}}>Delete</button>
                      </li>
                    )
              })
          }
          
        </ul>
      </>
    );
  }


export default ListContacts;
