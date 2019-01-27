import * as React from "react";
import {DefaultComponentProps} from "../../../core/interfaces/DefaultComponentProps";

export interface DropdownItemProps extends DefaultComponentProps {
}

interface DropdownItemState {
}

export class DropdownItem extends React.Component<DropdownItemProps, DropdownItemState> {
    public render() {
        return (
            <div
                onClick={this.props.onClick}
                className={`dropdown__item ${this.props.className || ""}`}>
                {this.props.children}
            </div>
        );
    }
}
