import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import IstDetails from './Components/IstDetails/IstDetails';
import Clubs from './Components/Clubs/Clubs';
import AboutIst from './Components/AboutIst/AboutIst';
import ContactUs from './Components/ContactUs/ContactUs';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/services'>
            <IstDetails></IstDetails>
          </Route>
          <Route exact path='/clubs'>
            <Clubs></Clubs>
          </Route>
          <Route exact path='/about'>
            <AboutIst></AboutIst>
          </Route>
          <Route exact path='/contact'>
            <ContactUs></ContactUs>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
