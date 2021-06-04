import './App.css';
import HomePage from './pages/homepage/homepage';
import { BrowserRouter, Route } from 'react-router-dom';
const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};
const App = () => {
  return (
    <BrowserRouter>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop/hats' component={HatsPage} />
    </BrowserRouter>
  );
};

export default App;
