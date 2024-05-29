//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Home';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}>
          
        </Route>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
