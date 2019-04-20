import * as React from "react";
import {Header, HeaderType} from "../../../basic/headers/header/components/Header";
import {Paragraph} from "../../../basic/paragraphs/paragraph/components/Paragraph";
import {Link} from "../../../core/interfaces/Link";
import {DescriptionBoardFooterViewObject} from "../models/DescriptionBoardFooterViewObject";

export interface DescriptionBoardFooterProps {
    viewObject: DescriptionBoardFooterViewObject;
}
export interface DescriptionBoardFooterState {}

export class DescriptionBoardFooter extends React.Component<DescriptionBoardFooterProps, DescriptionBoardFooterState> {
    public render() {
        const viewObject = this.props.viewObject;

        return (
            <div className="description-board">
                <Header
                    className="color color--4"
                    type={HeaderType.h3}>
                    {viewObject.title}
                </Header>
                {this.getFormatterLinks(viewObject.links, viewObject.andSeparator)}
                <div className="margin--bottom-top">
                    <Paragraph>
                        {viewObject.description}
                    </Paragraph>
                </div>
            </div>
        );
    }

    public getFormatterLinks(links: Link[], andSeparator: string) {
        const indexToPlaceSeparatorAnd = links.length - 2;
        return links.map((link, index) => {
            if (index === indexToPlaceSeparatorAnd) {
                return this.getLinkComponent(link, `${index}`, ` ${andSeparator} `);
            }

            return this.getLinkComponent(link, `${index}`);
        });
    }

    public getLinkComponent(link: Link, key: string, separator: string = "") {
        return (
            <span key={key}>
                <a href={link.href}>
                {link.value}
                </a>
                {separator}
            </span>
        );
    }
}
