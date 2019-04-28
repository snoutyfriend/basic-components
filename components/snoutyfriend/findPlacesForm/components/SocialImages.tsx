import * as React from "react";
import {Header, HeaderType} from "../../../basic/headers/header/components/Header";
import {Link} from "../../../core/interfaces/Link";
import {SocialLinksFormatter} from "../../../core/SocialLinksFormatter";
import {RandomImageGrid} from "./RandomImageGrid";

export interface SocialImagesViewObject {
    title: string;
    links: Link[];
    andSeparator: string;
    images: string[];
}
export interface SocialImagesProps {
    viewObject: SocialImagesViewObject;
}
export class SocialImages extends React.Component<SocialImagesProps, {}> {
    public render() {
        const {viewObject} = this.props;
        const socialLinksFormatter = new SocialLinksFormatter();

        return (
            <div className="social-images">
                <div className="social-images__title">
                    <Header type={HeaderType.h3} className="color color--4" >
                            {viewObject.title} <br />
                            {socialLinksFormatter.getFormatterLinks(viewObject.links, viewObject.andSeparator)}
                    </Header>
                </div>
                <RandomImageGrid imagesUrl={viewObject.images}/>
            </div>
        );
    }
}
