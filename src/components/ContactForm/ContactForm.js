import css from './ContactForm.module.css';
import { useState } from 'react';

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);

        break;

      case 'number':
        setNumber(value);

        break;

      default:
        break;
    }
  };

  const onSubmit = e => {
    setName('');
    setNumber('');

    onAddContact({ name, number, e });
  };

  return (
    <form className={css.form} onSubmit={onSubmit}>
      <label className={css.label}>
        <span className={css.title}>Name</span>
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          required
          onChange={onInputChange}
        />
      </label>

      <label className={css.label}>
        <span className={css.title}>Phone number</span>
        <input
          className={css.input}
          type="tel"
          name="number"
          value={number}
          required
          onChange={onInputChange}
        />
      </label>

      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
