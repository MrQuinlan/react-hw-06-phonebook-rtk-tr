import css from './Contacts.module.css';

const Contacts = ({ contacts, onRemoveContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          <p>
            {name}: {number}{' '}
          </p>

          <button
            className={css.btn}
            type="button"
            onClick={() => onRemoveContact(id)}
          >
            remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
