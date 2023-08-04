import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { deleteContact } from 'redux/operations';
import { Item } from './ContactsList.styled';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  // const contact =

//  contacts.map((contact) => console.log(contact.name));
    // const handleDelete = () => dispatch(deleteContact());
  // console.log(contacts.items)

  const getFilteredContacts = () => {
    if (contacts) {
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ul>
      {filteredContacts.map(item => {
        return (
          <Item key={item.id}>
            {item.name}: {item.number}
            <button
              onClick={() => {
                dispatch(deleteContact(item.id));
              }}
            >
              Delete
            </button>
          </Item>
        );
      })}
    </ul>
  );
};




  // <ul>
  //      {filteredContacts.map(item => {
  //       return (
  //         <Item key={item.id}>
  //           {item.name}: {item.number}
  //           <button
  //             onClick={() => {
  //               dispatch(deleteContact(item.id));
  //             }}
  //     {filteredContacts.length ?  filteredContacts.map(item => {
  //       return (
  //         <Item key={item.id}>
  //           {item.name}: {item.number}
  //           <button
  //             onClick={() => {
  //               dispatch(deleteContact(item.id));
  //             }}
  //           >
  //             Delete
  //           </button>
  //         </Item>
  //       );
  //     }) : (
  //       <div>You don't have saved contacts...</div>
  //     )}
  //   </ul>