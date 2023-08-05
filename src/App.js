import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Home from './components/home/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Products from './components/Products';
import Changeone from './components/Changeone';
import Changetwo from './components/Changetwo';
import Changethree from './components/Changethree';
import Changefour from './components/Changefour';
import Changefive from './components/Changefive';
import ProductDetails from './components/Productdetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="changeone" element={<Changeone />} />
          <Route path="changetwo" element={<Changetwo />} />
          <Route path="changethree" element={<Changethree />} />
          <Route path="changefour" element={<Changefour />} />
          <Route path="changefive" element={<Changefive />} />
          <Route path="productdetails" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
