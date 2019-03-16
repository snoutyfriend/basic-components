import * as React from "react";
import {DefaultComponentProps} from "../../../core/interfaces/DefaultComponentProps";
import {Statement} from "../../../core/Statement";
import {IconName, IconSvgs} from "./IconSvgs";

export interface IconProps extends DefaultComponentProps {
    iconName: IconName;
}
export class Icon extends React.Component<IconProps, {}> {

    public render() {
        const { iconName, className, children } = this.props;
        return (
            <span className={`icon ${className || ""}`}>
                {IconSvgs.getIcon(iconName)}
            </span>
        );
    }
}
