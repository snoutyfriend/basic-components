import * as React from "react";
import {DefaultComponentProps} from "../../../core/interfaces/DefaultComponentProps";
import {IconContent, IconName} from "./IconContent";

export interface IconProps extends DefaultComponentProps {
    iconName: IconName;
    size?: number;
}
export class Icon extends React.Component<IconProps, {}> {

    public render() {
        const { iconName, className } = this.props;
        return (
            <span className={`icon ${className || ""}`}>
                <img src={IconContent.getContent(iconName)} />
            </span>
        );
    }
}
