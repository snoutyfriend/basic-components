import * as React from "react";
import {SocialLink} from "../../../core/interfaces/SocialLink";
import {Header, HeaderType} from "../../../basic/headers/header/components/Header";
import {Icon} from "../../../basic/icons/icon/components/Icon";
import {Paragraph} from "../../../basic/paragraphs/paragraph/components/Paragraph";
import {DescriptionBoardViewObject} from "../models/DescriptionBoardViewObject";
import {DescriptionBoardFooter} from "./DescriptionBoardFooter";

export interface DescriptionBoardProps {
    viewObject: DescriptionBoardViewObject;
}
export interface DescriptionBoardState {}

export class DescriptionBoard extends React.Component<DescriptionBoardProps, DescriptionBoardState> {
    public render() {
        const viewObject = this.props.viewObject;

        return (
            <div className="description-board">
                <Header type={HeaderType.h2}>
                    {viewObject.title}
                </Header>
                <div className="margin--bottom-top">
                    <Paragraph>
                        {viewObject.description}
                    </Paragraph>
                </div>
                <div className="description-board__footer">
                    <DescriptionBoardFooter viewObject={viewObject.footer}/>
                </div>
            </div>
        );
    }
}
