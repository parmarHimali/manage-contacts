import React, { useRef } from "react";

const CreateContact = ({ handleContacts }) => {
  let nameElement = useRef();
  let phoneNumberElement = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    let name = nameElement.current.value;
    let contactNumber = phoneNumberElement.current.value;
    nameElement.current.value = "";
    phoneNumberElement.current.value = "";
    if (name && contactNumber) {
      handleContacts(name, contactNumber);
    } else {
      alert("Please fill up all the fields!");
    }
  };
  return (
    <div className="create-container">
      <form onSubmit={handleSubmit}>
        <h2 className="heading-2">Create New Contact</h2>
        <label htmlFor="name">Name :</label> <br />
        <input
          type="text"
          id="name"
          placeholder="Enter name"
          ref={nameElement}
        />
        <br />
        <label htmlFor="number">Contact Number :</label>
        <br />
        <input
          type="text"
          id="number"
          placeholder="Enter Number"
          ref={phoneNumberElement}
        />
        <button className="btn">Create</button>
      </form>
    </div>
  );
};

export default CreateContact;
