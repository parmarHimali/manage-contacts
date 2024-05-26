import { useEffect, useState } from "react";
import "./App.css";
import CreateContact from "./components/CreateContact";
import Header from "./components/Header";
import ContactList from "./components/ContactList";

function App() {
  const localStorageKey = "contact";
  const [contactList, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contactList));
  }, [contactList]);
  const handleContacts = (n, c) => {
    console.log(n, c);
    setContacts([...contactList, { name: n, contact: c }]);
  };
  const handleDelete = (dltcontact) => {
    const updatedList = contactList.filter((data) => {
      return data.contact !== dltcontact;
    });
    setContacts(updatedList);
  };
  return (
    <>
      <Header />
      <div className="content">
        <CreateContact handleContacts={handleContacts} />
        <ContactList contacts={contactList} handleDelete={handleDelete} />
      </div>
    </>
  );
}

export default App;
