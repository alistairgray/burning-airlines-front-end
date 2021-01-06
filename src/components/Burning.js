/* DEPENDENCIES */
import React from 'react';
import '../index.css';
import {Route, Link, HashRouter as Router} from 'react-router-dom';

/* CHILDREN OF BURNING.JS */
import Search from './Search'
import Reservations from './Reservations';


/* ----- PARENT COMPONENT ----- */
class Burning extends React.Component {
    render(){
        return(
            <div className="wrapper">

            <h1><span className="fire">B</span><span className="burn">u</span><span className="burn">r</span><span className="fire">n</span><span className="burn">i</span><span className="fire">n</span><span className="burn">g</span> <span className="fire">A</span><span className="burn">i</span><span className="burn">r</span><span className="fire">l</span>i<span className="burn">n</span>e<span className="fire">s</span></h1>

            <h3>Check out our 'parachute only arrival' specials!</h3>
            <Router>
                <nav>
                  <Link to="/search">Search Flights</Link>
                </nav>
                <hr />

            <Route exact path="/search" component={Search} />
            <Route exact path="/flights/:flight_number" component={Reservations} />

            </Router>
            <footer>
            <hr />
            &copy; Winging It Productions 2021 - <em>For legal disputes or claims, please contact Scotty from Marketing</em>
            </footer>
            </div>

        ) // return
    } // render
} // class Burning

export default Burning
