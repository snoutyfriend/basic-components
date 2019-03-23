import * as React from "react";
import {PrimaryButton} from "../../../buttons/primary-button";
import {Dropdown} from "../../../dropdowns/dropdown/components/Dropdown";
import {SearchableDropdownObservable} from "../../../dropdowns/dropdown/observables/SearchableDropdownObservable";
import {Header} from "../../../headers/header/components/Header";
import {Panel, Type} from "../../../panels/panel/components/Panel";
import {Paragraph} from "../../../paragraphs/paragraph/components/Paragraph";

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
                        <Dropdown searchableDropdownObservable={searchableDropdownObservable} activeItem={{
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
