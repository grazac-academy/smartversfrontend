import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Problem from './components/Problem/Problem';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Results from './components/Results/Results';
import UseCases from './components/UseCases/UseCases';
import Features from './components/Features/Features';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="smartvert-app">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Results />
        <UseCases />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
