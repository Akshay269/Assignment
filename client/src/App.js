
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
     <BrowserRouter>
      <Navbar />
      <Route path="/" exact component={Home} />
    </BrowserRouter>
    </>
  );
}

export default App;
