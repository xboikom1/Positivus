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
      </main>
    </div>
  );
};

export default App;
