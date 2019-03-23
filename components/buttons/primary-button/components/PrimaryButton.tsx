import * as React from "react";
import {DefaultComponentProps} from "../../../core/interfaces/DefaultComponentProps";
import "../../../core/scss/theme.scss";
import {Button, ButtonState} from "../../button";

export class PrimaryButton extends React.Component<DefaultComponentProps, ButtonState> {
    public render() {
        return (
            <Button className={`${this.props.className} primary-button text text--uppercase`}>
                {this.props.children}
            </Button>
        );
    }
}
