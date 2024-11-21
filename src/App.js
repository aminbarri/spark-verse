
import './App.css';
import {Container } from './Components/index';
import { Header,Footer, Hero, MostPopular,Labiry  } from './sections/index';

function App() {
  return (
    <>
    <Header />
    <Container>
     <Hero />
     <MostPopular />
     <Labiry />
    </Container>
    
    <Footer />
    </>
  );
}

export default App;
