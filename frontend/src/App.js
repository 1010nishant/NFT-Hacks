import About from './components/about/About';
import Faq from './components/faq/Faq';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Sponsors from './components/sponsors/Sponsors';
import Team from './components/team/Team';
import Theme from './components/theme/Theme';
import Timeline from './components/timeline/Timeline';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Timeline />
      <Theme />
      <Sponsors />
      <Team />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
