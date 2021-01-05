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

                <h3>Selected Origin</h3>
                <ul>
                    {
                    this.state.origin
                    }
                </ul>

                <hr />

                <h3>Selected Destination</h3>
                <ul>
                    {
                    this.state.destination
                    }
                </ul>

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