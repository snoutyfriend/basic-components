import * as React from "react";
import {DefaultComponentProps} from "../../../../core/interfaces/DefaultComponentProps";

export interface DropdownItemProps extends DefaultComponentProps {
}

interface DropdownItemState {
}

export class DropdownItem extends React.Component<DropdownItemProps, DropdownItemState> {
    public render() {
        return (
            <button
                onClick={this.props.onClick}
                className={`button--no-style dropdown__item dropdown__box ${this.props.className || ""}`}>
                {this.props.children}
            </button>
        );
    }
}
