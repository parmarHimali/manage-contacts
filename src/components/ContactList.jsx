import React from "react";
import { MdDelete } from "react-icons/md";
import MessageShow from "./MessageShow";
const ContactList = ({ contacts, handleDelete }) => {
  return (
    <>
      <div className="list-container">
        <h2 className="heading-2">Contact List</h2>
        <ul className="list">
          {contacts.length == 0 && <MessageShow />}
          {contacts.map((data, idx) => {
            return (
              <li className="list-item" key={idx}>
                <span>Name: {data.name}</span>
                <span>Contact: {data.contact}</span>
                <span onClick={() => handleDelete(data.contact)}>
                  <MdDelete />
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ContactList;
