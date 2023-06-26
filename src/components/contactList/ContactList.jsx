import { usePhonebook } from 'providers/PhonebookProvider';

const ContactList = () => {
  const { contacts, filter, handleDelete } = usePhonebook();

  return (
    <ul>
      {contacts.map(
        ({ id, name, number }) =>
          name.toLowerCase().includes(filter.toLowerCase()) && (
            <li key={id}>
              <p>
                {' '}
                {name}: {number}
              </p>
              <button
                type="button"
                name="delete"
                id={id}
                onClick={handleDelete}
              >
                Delete
              </button>
            </li>
          )
      )}
    </ul>
  );
};

export default ContactList;