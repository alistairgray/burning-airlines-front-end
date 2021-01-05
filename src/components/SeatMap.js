import React from 'react';
import Seats from './Seats';

class SeatMap extends React.Component {
  render(){
    return(
      <div>
        {
          this.props.seatMap.map( row =>

            <div key={ Object.keys(row)[0] } >
              <Seats
                row={ Object.keys(row)[0] }
                seats={ Object.values(row)[0] }
                tempSelectedSeat={ this.props.tempSelectedSeat }
                onSelectSeat={ this.props.onSelectSeat }
              />
            </div>
          )
        }
      </div>
    )
  }
}

export default SeatMap
