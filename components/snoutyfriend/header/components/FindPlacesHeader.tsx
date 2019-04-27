import * as React from "react";
import {FindPlacesHeaderViewObject} from "..";
import {Icon} from "../../../basic";
import {ImagesRepository} from "../../../core/interfaces/ImagesRepository";
import {SocialLink} from "../../../core/interfaces/SocialLink";
import {ImageFilenames} from "../../../core/repositories/DefaultImagesRepository";

export interface FindPlacesHeaderProps {
    type?: FindPlacesHeaderType;
    viewObject: FindPlacesHeaderViewObject;
    imagesRepository: ImagesRepository;
}
export interface FindPlacesHeaderState {}

export enum FindPlacesHeaderType {
    DEFAULT = "",
    FIXED = "fixed",
}

export class FindPlacesHeader extends React.Component<FindPlacesHeaderProps, FindPlacesHeaderState> {
    public render() {
        const viewObject = this.props.viewObject;
        const imagesRepository = this.props.imagesRepository;

        return (
            <div className={`find-places-header find-places-header--default ${this.getTypeClass(this.props.type)}`}>
                <div className="find-places-header__logo">
                    <img src={imagesRepository.getImage(ImageFilenames.LOGO_BLUE)} alt={"alt"} />
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
        const {imagesRepository} = this.props;
        return (
            <a href={socialLink.link.href}>
                <Icon
                    iconName={socialLink.iconName}
                    alt={socialLink.alt}
                    className="find-places-header__icon"
                    imagesRepository={imagesRepository}/>
            </a>
        );
    }
}
