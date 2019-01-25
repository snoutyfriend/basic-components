import * as React from "react";
import {Statement} from "../../../core/Statement";

export interface ButtonProps {
    className?: string;
    onClick?(): void;
    onHover?(): void;
}
export interface ButtonState {

}

export class Button extends React.Component<ButtonProps, ButtonState> {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
        this.onHover = this.onHover.bind(this);
    }

    public render() {
        return (
            <button
                onClick={this.onClick}
                onMouseOver={this.onHover}
            >
                {this.props.children}
            </button>
        );
    }

    private runIfValid(method: () => void): void {
        Statement.runIfTrue(typeof method === "function", method);
    }

    private onClick(): void {
        this.runIfValid(this.props.onClick);
    }

    private onHover(): void {
        this.runIfValid(this.props.onHover);
    }
}
