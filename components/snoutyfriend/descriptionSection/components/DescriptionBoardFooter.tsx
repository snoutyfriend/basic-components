import * as React from "react";
import {Header, HeaderType} from "../../../basic/headers/header/components/Header";
import {Paragraph} from "../../../basic/paragraphs/paragraph/components/Paragraph";
import {SocialLinksFormatter} from "../../../core/SocialLinksFormatter";
import {DescriptionBoardFooterViewObject} from "../models/DescriptionBoardFooterViewObject";

export interface DescriptionBoardFooterProps {
    viewObject: DescriptionBoardFooterViewObject;
}
export interface DescriptionBoardFooterState {}

export class DescriptionBoardFooter extends React.Component<DescriptionBoardFooterProps, DescriptionBoardFooterState> {
    public render() {
        const viewObject = this.props.viewObject;
        const socialLinksFormatter = new SocialLinksFormatter();

        return (
            <div className="description-board">
                <Header
                    className="color color--4"
                    type={HeaderType.h3}>
                    {viewObject.title}
                </Header>
                {socialLinksFormatter.getFormatterLinks(viewObject.links, viewObject.andSeparator)}
                <div className="margin--bottom-top">
                    <Paragraph>
                        {viewObject.description}
                    </Paragraph>
                </div>
            </div>
        );
    }
}
