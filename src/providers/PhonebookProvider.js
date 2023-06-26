import localStore from '../utils/localStore';
import { nanoid } from 'nanoid';
const { createContext, useContext, useState, useEffect } = require('react');

const PhonebookContext = createContext();

export const PhonebookProvider = ({ children }) => {
  const [contacts, setContacts] = useState(
    localStore.load('contacts')
      ? localStore.load('contacts')
      : localStore.save('contacts', [])
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStore.save('contacts', contacts);
  }, [contacts]);

  const handleFilter = evt => {
    const { value } = evt.target;
    setFilter(value);
  };

  const handleNewContact = (name, number) => {
    if (name === '') {
      return;
    }
    if (contacts.find(e => e.name === name)) {
      return alert(`${name} is already in contacts`);
    }
    if (contacts.find(e => e.number === number)) {
      return alert(`Number ${number} is already in contacts`);
    }
    if (name === '') {
      return alert(`Name field should be filled`);
    }
    if (number === '') {
      return alert(`Number field should be filled`);
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const handleDelete = evt => {
    evt.preventDefault();
    const { id } = evt.target;
    setContacts(prevContacts => prevContacts.filter(c => c.id !== id));
  };

  return (
    <PhonebookContext.Provider
      value={{ contacts, filter, handleFilter, handleNewContact, handleDelete }}
    >
      {children}
    </PhonebookContext.Provider>
  );
};

export const usePhonebook = () => useContext(PhonebookContext);
