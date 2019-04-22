import * as React from "react";
import {BasicDropdown} from "../../../basic/dropdowns/dropdown/components/BasicDropdown";
import {DropdownFilterModel} from "../models/DropdownFilterModel";
import {Header, HeaderType} from "../../../basic/headers/header/components/Header";

export interface FilterProps {
    filterModel: DropdownFilterModel;
}
export class DropdownFilter extends React.Component<FilterProps, {}> {
    public render() {
        const {filterModel} = this.props;
        const size = filterModel.getSize();
        return (
            <div className={`dropdown-filter dropdown-filter--size-${size}`}>
                <label className="dropdown-filter__label">
                    <Header
                        type={HeaderType.h4}>
                        {filterModel.getLabel()}
                    </Header>
                </label>
                <BasicDropdown
                    dropdownObservable={filterModel.getDropdownObservable()}  />
            </div>
        );
    }
}
