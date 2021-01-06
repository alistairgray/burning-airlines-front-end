import React from 'react'

class Seats extends React.Component {
  render(){
    let tempSeat = this.props.tempSelectedSeat;
    tempSeat = tempSeat ? tempSeat : '';

    return(
      <div className="seats">
        {
          this.props.seats.map( seat =>
            <span
              key={ seat.id }
              className={ `${seat.status} ${tempSeat === seat.id && seat.status === 'open' && 'selected'}` }
              onClick={ () => this.props.onSelectSeat(seat.id) }
            >
              { this.props.row }
              { seat.col }
            </span>
          )
        }
      </div>
    )
  }
}

export default Seats
