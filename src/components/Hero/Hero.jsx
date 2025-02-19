import clsx from 'clsx';
import Header from '../Header/Header';
import Logotypes from '../Logotypes/Logotypes';
import Navigation from '../Navigation/Navigation';
import css from './Hero.module.css';

const Hero = () => {
  return (
    <section className={clsx('section', css.hero)}>
      <Navigation />
      <Header />
      <Logotypes />
    </section>
  );
};

export default Hero;
