import Case_Studies from './components/Case Studies/Case Studies';
import CTA_block from './components/CTA Block/CTA block';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';

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
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
