import React from "react";
import PropTypes from "prop-types";
import {RowProps} from "./interfaces";
import { Col } from "./col";

export class Row extends React.Component<RowProps> {
    
    static index = 0;

    static propTypes = {
        colNr: PropTypes.number.isRequired,
    }

    static createRow(i: number, cols: number): JSX.Element {
        return <Row index={i} colNr={cols} key={Row.index++} />;
    }

    createCols(): JSX.Element[] {
        const cols: JSX.Element[] = [];
        for (let i=0; i<this.props.colNr; i++) {
            cols.push(Col.createCol(this.props.index*this.props.colNr+i));
        }
        return cols;
    }

    render() {
        return (
            <div className="row">
                {this.createCols()}
            </div>
        );
    }
}