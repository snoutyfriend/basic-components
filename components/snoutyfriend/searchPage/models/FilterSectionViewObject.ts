import {DropdownFilterModel} from "./DropdownFilterModel";

export interface FilterSectionViewObjectProps {
    header: string;
    description: string;
    filters: DropdownFilterModel[];
}
export class FilterSectionViewObject {
    public hedaer: string;
    public description: string;
    public filters: DropdownFilterModel[];

    constructor(private props: FilterSectionViewObjectProps) {
        this.hedaer = props.header;
        this.description = props.description;
        this.filters = props.filters;
    }

}
