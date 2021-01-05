/* DEPENDENCIES */
import React from 'react';
import '../App.css';
import axios from 'axios';

/* CHILDREN OF SEARCH.JS */
import SearchResults from './SearchResults'

/* AXIOS */
// const BASE_URL = ''
// axios.get



/* ----- PARENT COMPONENT ----- */

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

            <h1>Burning Airlines</h1>
            <h3>Check out our 'parachute only arrival' specials!</h3>

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
                  <span>{ flight.date }</span>
                  <span>{ flight.flight }</span>
                  <span>{ flight.from }</span>
                  <span>></span>
                  <span>{ flight.to }</span>
                  <span>{ flight.plane }</span>
                </li>
              )
            }

            </div>
        ) // return
    } // render
} // class Search

export default Search;

/* BACKLOG */

/* OPTION SELECT */

{/* <label>From
                <br />
                <select>
                    <option value="Select One"</option>
                    <option value="Melbourne"</option>
                    <option value="Sydney"</option>
                    <option value="Brisbane"</option>
                </select>
                </label>

                <label>To
                <br />
                <select>
                    <option value="Select One"</option>
                    <option value="Melbourne"</option>
                    <option value="Sydney"</option>
                    <option value="Brisbane"</option>
                </select>
                </label> */}
