/* DEPENDENCIES */
import React from 'react';
import '../App.css';
import axios from 'axios';
import {Route, Link, HashRouter as Router} from 'react-router-dom';

/* AXIOS */
const BASE_URL = 'http://localhost:3000/flights';

/* ----- CHILD COMPONENT OF BURNING.JS ----- */

class Search extends React.Component {

    state = {
        origin: '',
        destination: '',
        flights: []
    };

    fetchFlights = () => {
        axios.get(BASE_URL, {
          params: {
            from: this.state.origin,
            to: this.state.destination
          }
        })
        .then((res) => {
          console.log(res.data);
          this.setState({
            flights: res.data
          })
            // console.log('response: ', res.data);

        })
        .catch(console.warn)
    }

    handleChangeOrigin = (ev) => {
        this.setState(
            {origin: ev.target.value}
        );
    }

    handleChangeDestination = (ev) => {
        this.setState(
            {destination: ev.target.value}
        );
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        // console.log('origin: ', this.state.origin);
        // console.log('destination: ', this.state.destination);

        this.fetchFlights()
    }

    render(){
        return(
            <div>

            <form onSubmit={this.handleSubmit}>

                <input type="text"
                placeholder="origin"
                onChange={this.handleChangeOrigin}/>

                <input type="text"
                placeholder="destination"
                onChange={this.handleChangeDestination}/>

                <button>Search</button>

            </form>


            { `origin: ${this.state.origin}, dest: ${this.state.destination}`}

            {
              this.state.flights.map( flight =>
                <li key={ flight.id }>
                  <span><p>date</p>{ flight.scheduled }</span>
                  <span><Link to={`/flights/${flight.flight}`}>flight #:{ flight.flight }</Link></span>
                  <br />
                  <span><p>Origin: </p>{ flight.from }</span>
                  <br />
                  <span></span>
                  <span><p>Destination: </p>{ flight.to }</span>
                  <br />
                  <span><p>Plane Type: </p>{ flight.plane }</span>
                </li>
              )
            }
            </div>
        ) // return
    } // render
} // class Search

export default Search;

/* BACKLOG */
