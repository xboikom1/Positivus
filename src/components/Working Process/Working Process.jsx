import css from './Working Process.module.css';
import Accordion from '../Accordion/Accordion';

const Working_Process = () => {
  return (
    <section className="section" id="working-process">
      <div className="titleContainer">
        <h2 className={css.title}>Our Working Process</h2>
        <p className={css.titleText}>
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>
      <Accordion />
    </section>
  );
};

export default Working_Process;
