import React from "react";
import {ColProps, ColState} from "./interfaces";

export class Col extends React.Component<ColProps, ColState> {
    
    static index = 0;

    text = '';

    constructor(public props: ColProps) {
        super(props);
    }

    componentDidMount() {
        this.setState({text: this.props.index});
        console.log(this.state);
        // this.text = this.state.text;
        setTimeout(()=>{
            console.log('rerender');
            console.log(this.state);
            this.setState({text: this.props.index+"a"});
        }, 2000);
    }


    static createCol(i: number): JSX.Element {
        return <Col key={Col.index++} index={i} />;
    }

    render() {
        return (
            <div className="col">{this.text}</div>
        )
    }
}