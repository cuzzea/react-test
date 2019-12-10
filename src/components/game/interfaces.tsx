import { Props } from "usables/interfaces";

export interface RowProps extends Props {
    index: number;
    colNr: number;
}

export interface ColProps extends Props {
    index: number;
    text?: any;
}

export interface ColState {
    text: any;
}