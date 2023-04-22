import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Specials from './components/Specials';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Specials />
      <Testimonials />
    </div>
  );
}

export default App;
