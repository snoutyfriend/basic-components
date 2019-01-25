import * as React from "react";
import "../../../core/scss/theme.scss";
import {Button, ButtonProps, ButtonState} from "../../button";

export class PrimaryButton extends React.Component<ButtonProps, ButtonState> {
    public render() {
        return (
            <Button className={this.props.className}>
                {this.props.children}
            </Button>
        );
    }
}
