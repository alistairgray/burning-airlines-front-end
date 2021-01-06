/* DEPENDENCIES */
import React from 'react';
import '../App.css';
import axios from 'axios';
import {Route, Link, HashRouter as Router} from 'react-router-dom';

/* AXIOS */
const BASE_URL = 'http://localhost:3001/airlines';

/* ----- CHILD COMPONENT OF BURNING.JS ----- */

class Search extends React.Component {

    state = {
        origin: '',
        destination: '',
        flights: [
          {
            id: '1',
            date: '3/1/13',
            flight: '23',
            from: 'JFK',
            to: 'SFO',
            plane: '757'
          },
          {
            id: '2',
            date: '3/3/13',
            flight: '412',
            from: 'JFK',
            to: 'SFO',
            plane: '747'
          },
          {
            id: '3',
            date: '3/8/13',
            flight: '09',
            from: 'JFK',
            to: 'SFO',
            plane: '757'
          }
        ]
    };

    // componentDidMount(){
    //     axios.get(BASE_URL)
    //     .then((res) => {
    //         console.log('response: ', res.data);
    //         
    //     })
    //     .catch(console.warn)
    // }

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
        console.log('origin: ', this.state.origin);
        console.log('destination: ', this.state.destination);
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
      
            <h4>
            { `origin: ${this.state.origin} || dest: ${this.state.destination}`}</h4>

            {
              this.state.flights.map( flight =>
                <li key={ flight.id }>
                  <span><p>date</p>{ flight.date }</span>
                  <br />
                  <Link to={`/flight/${flight.id}`}>flight #:{ flight.flight }</Link>
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


