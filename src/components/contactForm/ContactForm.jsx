import { usePhonebook } from 'providers/PhonebookProvider';

const ContactForm = () => {
  const { handleNewContact } = usePhonebook();

const handleFormSubmit = evt => {
    evt.preventDefault();
 
    const formDOM = evt.currentTarget;
    const newName = formDOM.elements.name.value;
    const newNumber = formDOM.elements.number.value;

    handleNewContact(newName, newNumber);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add to contacts</button>
    </form>
  );
};

export default ContactForm;