import React from "react";
import { Row } from "./row";
import './game.css';

export class Game extends React.Component {

    rowNr = 10;
    colNr = 10;

    createRows(): JSX.Element[] {
        const rows: JSX.Element[] = [];
        for (let i=0; i<this.rowNr; i++) {
            rows.push(Row.createRow(i, this.colNr));
        }
        return rows;
    }

    render() {
        return (
        <div>
            <h1>Game</h1>
            <div className="grid">
                {this.createRows()}
            </div>
        </div>
        )
    }
}
