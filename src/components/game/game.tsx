import React from "react";
import PropTypes, { InferProps } from "prop-types";

class Game extends React.Component {

    rowNr = 10;
    colNr = 10;

    rows: number[] = [];

    constructor(props: any) {
        super(props);
        for (let i=0; i< this.rowNr ; i++) {
            this.rows.push(this.colNr);
        }
    }

  render() {
    return (
      <div>
        <h1>Game</h1>
        <div className="grid">
            {this.rows.map(row => <Row colNr={this.colNr} />)}
        </div>
      </div>
    )
  }
}
export default Game



class Row extends React.Component {
    colNr = 3;
    cols: Col[] = [];
    
    propTypes = {
        colNr: PropTypes.number.isRequired,
    }

    constructor(props: InferProps<typeof Row.propTypes>) {
        super(props);
        console.log(this.colNr);
        console.log(props.colNr);
    }

    render() {
        return (
            <div className="row">
                row {this.cols}
            </div>
        );
    }
}

class Col extends React.Component {
    

    render() {
        return (
            <div>col</div>
        )
    }
}