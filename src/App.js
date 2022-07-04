
import './App.css';
import Navbar from './components/navbar/navbar';
import { Header, AboutMe, Services, CaseStudy, Portfolio, Testimonials } from './container/index'

function App() {
  return (
    <div className='app__bg'>
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <CaseStudy />
      <Portfolio />
      <Testimonials />
    </div>
  );
}

export default App;
