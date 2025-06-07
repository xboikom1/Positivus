import Case_Studies from './components/Case Studies/Case Studies';
import ContactUs from './components/Contact us/Contact us';
import CTA_block from './components/CTA Block/CTA block';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Team from './components/Team/Team';
import Testimonials from './components/Testimonials/Testimonials';
import Working_Process from './components/Working Process/Working Process';

const App = () => {
  return (
    <div className="pageContainer">
      <header>
        <Hero />
      </header>
      <main>
        <Services />
        <CTA_block />
        <Case_Studies />
        <Working_Process />
        <Team />
        <Testimonials />
        <ContactUs />
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
