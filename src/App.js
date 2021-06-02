import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import MovieList from "./movieList.js";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import NavB from "./navb.js";
import Header from "./header.js";
import AboutUs from "./aboutUs.js";
import ContactUs from "./contactUs.js";



function App() {
  return (
    <div className="App">
        <Router>
          <Header/>
          <NavB/>
            <Switch>
              <Route path="/" exact component={MovieList}/>
              <Route path="/about-us" component={AboutUs}/>
              <Route path="/contact-us" component={ContactUs}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
