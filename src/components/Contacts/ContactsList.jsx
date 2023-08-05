import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/selectors';
import { deleteContact } from 'redux/operations';
import { Item } from './ContactsList.styled';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

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
            {item.name}: {item.phone}
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
