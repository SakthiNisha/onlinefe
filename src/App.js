//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import Home from './Home';
import Vegetables from './Vegetables';
import Groceries from './Groceries';
import Fruits from './Fruits';
import Contact from './Contact';
import store from './redux/store';
import { Checkout } from './Checkout';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/vegitables" exact element={<Vegetables />}></Route>
        <Route path="/groceries" exact element={<Groceries />}></Route>
        <Route path="/fruits" exact element={<Fruits />}></Route>
        <Route path="/contact" exact element={<Contact />}></Route>
        <Route path="/checkout" exact element={<Checkout />}></Route>
      </Routes>
    </BrowserRouter>
    </Provider >
      
  );
}

export default App;
