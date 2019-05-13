import * as React from "react";
import {Header, HeaderType} from "../../../basic/headers/header/components/Header";
import {Paragraph} from "../../../basic/paragraphs/paragraph/components/Paragraph";
import {DropdownFilterModel} from "../models/DropdownFilterModel";
import {FilterSectionViewObject} from "../models/FilterSectionViewObject";
import {DropdownFilter} from "./DropdownFilter";
import {ImagesRepository} from "../../../core/interfaces/ImagesRepository";

export interface FiltersSectionProps {
    viewObject: FilterSectionViewObject;
    imagesRepository: ImagesRepository;
}
export class FiltersSection extends React.Component<FiltersSectionProps, {}> {
    public render() {
        const {viewObject, imagesRepository} = this.props;

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
                            return <DropdownFilter
                                imagesRepository={imagesRepository}
                                key={index} filterModel={filter} />;
                        })
                    }
                </div>
            </div>
        );
    }
}
