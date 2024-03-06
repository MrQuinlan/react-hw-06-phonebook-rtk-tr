import css from './Section.module.css';

const Container = ({ children }) => {
  return <section className={css.section}>{children}</section>;
};

export default Container;
