import * as React from "react";
import {Header, HeaderType} from "../../../basic/headers/header/components/Header";
import {Paragraph} from "../../../basic/paragraphs/paragraph/components/Paragraph";
import {DropdownFilterModel} from "../models/DropdownFilterModel";
import {FilterSectionViewObject} from "../models/FilterSectionViewObject";
import {DropdownFilter} from "./DropdownFilter";

export interface FiltersSectionProps {
    viewObject: FilterSectionViewObject;
}
export class FiltersSection extends React.Component<FiltersSectionProps, {}> {
    public render() {
        const {viewObject} = this.props;

        return (
            <div className="filters-section">
                <Header type={HeaderType.h3}>
                    {viewObject.hedaer}
                </Header>
                <Paragraph>
                    {viewObject.description}
                </Paragraph>
                <div className="filters-section__filters">
                    {
                        viewObject.filters.map( (filter: DropdownFilterModel, index: number) => {
                            return <DropdownFilter key={index} filterModel={filter} />;
                        })
                    }
                </div>
            </div>
        );
    }
}
