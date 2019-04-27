import * as React from "react";
import {FindPlacesViewObject} from "..";
import {PrimaryButton} from "../../../basic/buttons/primary-button";
import {SearchableDropdown} from "../../../basic/dropdowns/dropdown/components/SearchableDropdown";
import {SearchableDropdownObservable} from "../../../basic/dropdowns/dropdown/observables/SearchableDropdownObservable";
import {Header} from "../../../basic/headers/header/components/Header";
import {Panel, Type} from "../../../basic/panels/panel/components/Panel";
import {Paragraph} from "../../../basic/paragraphs/paragraph/components/Paragraph";
import {ImagesRepository} from "../../../core/interfaces/ImagesRepository";

export interface FindPlacesFormProps {
    searchableDropdownObservable: SearchableDropdownObservable;
    imagesRepository: ImagesRepository;
    viewObject: FindPlacesViewObject;
}
export interface FindPlacesFormState {}

export class FindPlacesForm extends React.Component<FindPlacesFormProps, FindPlacesFormState> {
    public render() {
        const imagesRepository = this.props.imagesRepository;
        const viewObject = this.props.viewObject;
        const searchableDropdownObservable = this.props.searchableDropdownObservable;
        return (
            <div className="find-places-form">
                <Panel type={Type.BOXED} className="panel--margin">
                    <Header>{viewObject.title}</Header>
                    <div className="margin--bottom-top find-places-form--subtitle">
                        <Paragraph>
                            {viewObject.description}
                        </Paragraph>
                    </div>
                    <div className="margin--bottom-top-spaced">
                        <SearchableDropdown
                            searchableDropdownObservable={searchableDropdownObservable}
                            activeItem={{
                            key: "1",
                            name: "Zagreb",
                        }}
                        imagesRepository={imagesRepository}
                        />
                    </div>
                    <div className="margin--bottom-top-spaced">
                        <PrimaryButton className="size--full">
                            {viewObject.ctaSearch}
                        </PrimaryButton>
                    </div>
                </Panel>
            </div>
        );
    }
}
