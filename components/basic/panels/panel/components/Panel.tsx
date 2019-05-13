import * as React from "react";
import {DefaultComponentProps} from "../../../../core/interfaces/DefaultComponentProps";

interface PanelProps extends DefaultComponentProps {
    type?: Type;
}

export enum Type {
    DEFAULT = "default",
    BOXED = "box",
}

export class Panel extends React.Component<PanelProps, {}> {
    public render() {
        const typeClass = this.getTypeClass(this.props.type);

        return (
            <div className={`panel ${typeClass} ${this.props.className || ""}`}>
                {this.props.children}
            </div>
        );
    }

    public getTypeClass(type?: Type) {
        if (type === undefined) {
            return `panel--${Type.DEFAULT}`;
        }

        return `panel--${type}`;
    }
}
