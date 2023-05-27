import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavContainer from './components/NavContainer';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavContainer/>
      <Homepage/>
      <Footer/>
    </>
  );
}

export default App;
