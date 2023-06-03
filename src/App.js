import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavContainer from './components/NavContainer';
import Homepage from './pages/Homepage';
import Detail from './pages/Detail';
import Footer from './components/Footer';
import Pembayaran from './pages/Pembayaran';

function App() {
  return (
    <>
      <NavContainer/>
      <Homepage/>
      <Detail/>
      <Pembayaran/>
      <Footer/>
    </>
  );
}

export default App;
