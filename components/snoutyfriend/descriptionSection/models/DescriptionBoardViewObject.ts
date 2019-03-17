import {DescriptionBoardFooterViewObject} from "./DescriptionBoardFooterViewObject";

export interface DescriptionBoardViewObjectProps {
    title: string;
    description: string;
    footer: DescriptionBoardFooterViewObject;
}
export class DescriptionBoardViewObject implements DescriptionBoardViewObjectProps{
    public title: string;
    public description: string;
    public footer: DescriptionBoardFooterViewObject;

    constructor(props: DescriptionBoardViewObjectProps) {
        this.title = props.title;
        this.description = props.description;
        this.footer = props.footer;
    }

}
