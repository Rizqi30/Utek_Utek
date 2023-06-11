import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavContainer from './components/NavContainer';
import Homepage from './pages/Homepage';
import Detail from './pages/Detail';
import Footer from './components/Footer';
import Pembayaran from './pages/Pembayaran';
import Order from './pages/Order';

function App() {
  return (
    <>
      <NavContainer/>
      <Homepage/>
      <Detail/>
      <Pembayaran/>
      <Order/>
      <Footer/>
    </>
  );
}

export default App;
