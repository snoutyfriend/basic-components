import {DropdownObservable} from "../../../basic/dropdowns/dropdown/observables/DropdownObservable";

export interface DropdownFilterModelProps {
    dropdownObservable: DropdownObservable;
    label: string;
}
export class DropdownFilterModel {
    constructor(private props: DropdownFilterModelProps) {}

    public getDropdownObservable() {
        return this.props.dropdownObservable;
    }

    public getLabel() {
        return this.props.label;
    }
}
