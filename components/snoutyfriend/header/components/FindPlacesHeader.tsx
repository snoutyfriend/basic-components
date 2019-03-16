import * as React from "react";
import * as logo from "../../../core/images/logo-blue.svg";
import {Icon} from "../../../icons/icon/components/Icon";
import {IconName} from "../../../icons/icon/components/IconContent";

export interface FindPlacesHeaderProps {
    type?: FindPlacesHeaderType;
}
export interface FindPlacesHeaderState {}

export enum FindPlacesHeaderType {
    DEFAULT = "",
    FIXED = "fixed",
}
export class FindPlacesHeader extends React.Component<FindPlacesHeaderProps, FindPlacesHeaderState> {
    public render() {
        return (
            <div className={`find-places-header ${this.getTypeClass(this.props.type)}`}>
                <div className="find-places-header__logo">
                    <img src={logo} />
                </div>
                <div className="find-places-header__social flex flex--vertical-center">
                    <span className="find-places-header__share-text">
                        SHARE
                    </span>
                    <Icon iconName={IconName.FACEBOOK} className="find-places-header__icon"/>
                    <Icon iconName={IconName.INSTAGRAM} className="find-places-header__icon"/>
                </div>
            </div>
        );
    }

    public getTypeClass(type?: FindPlacesHeaderType) {
        if (type === undefined) {
            return "";
        }

        return `find-places-header--${type}`;
    }
}
