import * as React from "react";
import * as logo from "../../../core/images/logo-blue.svg";
import {SocialLink} from "../../../core/interfaces/SocialLink";
import {Icon} from "../../../icons/icon/components/Icon";
import {FindPlacesViewObject} from "../../findPlacesForm/models/FindPlacesViewObject";

export interface FindPlacesHeaderProps {
    type?: FindPlacesHeaderType;
    viewObject: FindPlacesViewObject;
}
export interface FindPlacesHeaderState {}

export enum FindPlacesHeaderType {
    DEFAULT = "",
    FIXED = "fixed",
}

export class FindPlacesHeader extends React.Component<FindPlacesHeaderProps, FindPlacesHeaderState> {
    public render() {
        const viewObject = this.props.viewObject;

        return (
            <div className={`find-places-header find-places-header--default ${this.getTypeClass(this.props.type)}`}>
                <div className="find-places-header__logo">
                    <img src={logo} alt={"alt"} />
                </div>
                <div className="find-places-header__social flex flex--vertical-center">
                    <span className="find-places-header__share-text">
                        {viewObject.share}
                    </span>
                    {
                        viewObject.socialLinks.map((socialLink, index) => {
                            return (
                                <span key={index}>
                                    {this.getLinkComponent(socialLink)}
                                </span>
                            );
                        })
                    }
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

    public getLinkComponent(socialLink: SocialLink) {
        return (
            <a href={socialLink.link.href}>
                <Icon iconName={socialLink.iconName} alt={socialLink.alt} className="find-places-header__icon"/>
            </a>
        );
    }
}
