import * as React from "react";
import {DefaultComponentProps} from "../../../core/interfaces/DefaultComponentProps";
import {Statement} from "../../../core/Statement";

export enum HeaderType {
    h1 = "h1",
    h2 = "h2",
    h3 = "h3",
}
export interface HeaderProps extends DefaultComponentProps {
    type?: HeaderType;
}
interface HeaderState {

}
export class Header extends React.Component<HeaderProps, HeaderState> {
    private type: HeaderType = HeaderType.h2;

    public componentWillMount(): void {
        Statement.runIfTrue(this.props.type !== undefined, () => {
            this.type = this.props.type;
        });
    }

    public render() {
        const headerProps = {
            className: `header ${this.props.className || ""}`,
        };
        const headerElement = this.getHeader(headerProps);

        return (
            headerElement
        );
    }

    public getHeader(headerProps) {
        let headerElement = <h2 {...headerProps}>
            {this.props.children}
        </h2>;

        Statement.runIfTrue(this.type === HeaderType.h1, () => {
            headerElement = <h1 {...headerProps}>
                {this.props.children}
            </h1>;
        });

        Statement.runIfTrue(this.type === HeaderType.h3, () => {
            headerElement = <h3 {...headerProps}>
                {this.props.children}
            </h3>;
        });

        return headerElement;
    }
}
