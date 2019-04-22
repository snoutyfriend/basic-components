import {DropdownObservable} from "../../../basic/dropdowns/dropdown/observables/DropdownObservable";

export interface DropdownFilterModelProps {
    dropdownObservable: DropdownObservable;
    label: string;
    size?: DropdownFilterSize;
}
export enum DropdownFilterSize {
    SMALL = "S",
    LARGE = "L",
}
export class DropdownFilterModel {
    constructor(private props: DropdownFilterModelProps) {}

    public getDropdownObservable() {
        return this.props.dropdownObservable;
    }

    public getLabel() {
        return this.props.label;
    }

    public getSize(): DropdownFilterSize {
        return this.props.size || DropdownFilterSize.LARGE;
    }
}
