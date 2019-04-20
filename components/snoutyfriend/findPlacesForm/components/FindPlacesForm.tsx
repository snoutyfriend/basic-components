import * as React from "react";
import {PrimaryButton} from "../../../basic/buttons/primary-button";
import {SearchableDropdown} from "../../../basic/dropdowns/dropdown/components/SearchableDropdown";
import {SearchableDropdownObservable} from "../../../basic/dropdowns/dropdown/observables/SearchableDropdownObservable";
import {Header} from "../../../basic/headers/header/components/Header";
import {Panel, Type} from "../../../basic/panels/panel/components/Panel";
import {Paragraph} from "../../../basic/paragraphs/paragraph/components/Paragraph";

export interface FindPlacesFormProps {
    searchableDropdownObservable: SearchableDropdownObservable;
}
export interface FindPlacesFormState {}

export class FindPlacesForm extends React.Component<FindPlacesFormProps, FindPlacesFormState> {
    public render() {
        const searchableDropdownObservable = this.props.searchableDropdownObservable;
        return (
            <div className="find-places-form">
                <Panel type={Type.BOXED} className="panel--margin">
                    <Header>Find Pet-Friendly Places</Header>
                    <div className="margin--bottom-top find-places-form--subtitle">
                        <Paragraph>
                            Odaberite grad i pronadjite kafice i restorane u kojima su dopustene zivotinje!
                        </Paragraph>
                    </div>
                    <div className="margin--bottom-top-spaced">
                        <SearchableDropdown searchableDropdownObservable={searchableDropdownObservable} activeItem={{
                            key: "1",
                            name: "Zagreb",
                        }}/>
                    </div>
                    <div className="margin--bottom-top-spaced">
                        <PrimaryButton className="size--full">
                            Find
                        </PrimaryButton>
                    </div>
                </Panel>
            </div>
        );
    }
}
