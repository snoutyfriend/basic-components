import * as React from "react";
import {DefaultComponentProps} from "../../../../core/interfaces/DefaultComponentProps";
import {Button, ButtonState} from "../../button";

export class PrimaryButton extends React.Component<DefaultComponentProps, ButtonState> {
    public render() {
        return (
            <Button
                onClick={this.props.onClick}
                className={`${this.props.className} primary-button text text--uppercase`}>
                {this.props.children}
            </Button>
        );
    }
}
