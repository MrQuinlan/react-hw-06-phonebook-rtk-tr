import css from './Filter.module.css';

const Filter = ({ label, value, onSearchContacts }) => {
  return (
    <label className={css.label}>
      <span className={css.title}>{label}</span>

      <input
        className={css.input}
        type="text"
        name="name"
        value={value}
        onChange={onSearchContacts}
        autoComplete="off"
      ></input>
    </label>
  );
};

export default Filter;
