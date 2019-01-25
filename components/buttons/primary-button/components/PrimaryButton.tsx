import * as React from "react";
import {Button, ButtonProps, ButtonState} from "../../button/components/Button";

export class PrimaryButton extends React.Component<ButtonProps, ButtonState> {
    public render() {
        return (
            <Button>
                Search
            </Button>
        );
    }
}