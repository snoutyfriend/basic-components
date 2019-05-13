import * as React from "react";
import {DefaultComponentProps} from "../../../../core/interfaces/DefaultComponentProps";

interface ParagraphState {
}

export class Paragraph extends React.Component<DefaultComponentProps, ParagraphState> {
    public render() {
        return (
            <p className={`paragraph ${this.props.className || ""}`}>{this.props.children}</p>
        );
    }
}
