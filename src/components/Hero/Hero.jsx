import Header from "../Header/Header";
import Logotypes from "../Logotypes/Logotypes";
import Navigation from "../Navigation/Navigation";
import css from './Hero.module.css';

const Hero = () => {
    return (
      <div className={css.heroContainer}>
        <Navigation />
        <Header />
        <Logotypes />
      </div>
    );
};

export default Hero;
