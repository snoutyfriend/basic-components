import * as React from "react";
import {DefaultComponentProps} from "../../../core/interfaces/DefaultComponentProps";

interface PanelProps {
}

export class Panel extends React.Component<DefaultComponentProps, PanelProps> {
    public render() {
        return (
            <div className={`panel ${this.props.className || ""}`}>
                {this.props.children}
            </div>
        );
    }
}
