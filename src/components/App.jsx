import { nanoid } from 'nanoid';
import Section from './Section';
import ContactForm from './ContactForm';
import Contacts from './Contacts';
import Filter from './Filter';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from '../redux/slices/contactsSlice';
import { setFilterValue } from '../redux/slices/filterSlice';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.persistedReducer.contactsReducer);
  const filterValue = useSelector(
    state => state.persistedReducer.filterReducer
  );

  const onAddContact = ({ name, number, e }) => {
    e.preventDefault();

    const newContact = onCheckContact(name.toLowerCase());

    if (newContact) {
      return alert(`${name} is already in contacts`);
    }

    const contact = { id: nanoid(), name: name, number: number };

    dispatch(add(contact));
  };

  const onCheckContact = value => {
    return contacts.some(({ name }) => name.toLocaleLowerCase() === value);
  };

  const onFilterContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(filterValue)
    );
  };

  const onRemoveContact = contactId => {
    dispatch(remove(contactId));
  };

  return (
    <Section>
      <ContactForm onAddContact={onAddContact} />

      {contacts.length > 0 && (
        <Filter
          label="Find contacts by name"
          value={filterValue}
          onSearchContacts={e =>
            dispatch(setFilterValue(e.currentTarget.value.toLowerCase()))
          }
        />
      )}

      {contacts.length > 0 && (
        <Contacts
          contacts={onFilterContacts()}
          onRemoveContact={onRemoveContact}
        />
      )}
    </Section>
  );
};

export default App;
