
import './App.css';
import {Container } from './Components/index';
import {BrowserRouter as Router ,Route ,Routes} from 'react-router-dom';
import { Header,Footer  } from './sections/index';
import {Home} from './Pages/index'
import {Profile} from './Pages/index'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'


function App() {
  return (
    <Router>
      <>
      
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={ <Profile />} />
     
        </Routes>
    
      </Container>
      
      <Footer />
      </>
    </Router>
  );
}

export default App;
