import {Link} from "../../../core/interfaces/Link";

export interface DescriptionBoardFooterViewObjectProps {
    title: string;
    links: Link[];
    description: string;
    andSeparator: string;
}
export class DescriptionBoardFooterViewObject {
    public title: string;
    public links: Link[];
    public description: string;
    public andSeparator: string;

    constructor(props: DescriptionBoardFooterViewObjectProps) {
        this.title = props.title;
        this.links = props.links;
        this.description = props.description;
        this.andSeparator = props.andSeparator;
    }
}
