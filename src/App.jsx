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
      </main>
    </div>
  );
};

export default App;
