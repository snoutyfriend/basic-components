import * as React from "react";
import {DefaultComponentProps} from "../../../../core/interfaces/DefaultComponentProps";
import {IconFilenames} from "../../../../core/repositories/DefaultImagesRepository";
import {Icon} from "../../../icons/icon/components/Icon";
import {SearchableDropdownObservable} from "../observables/SearchableDropdownObservable";
import {DropdownItemDetails} from "../observables/SimpleDropdownObservable";
import {DropdownItem} from "./DropdownItem";
import {ImagesRepository} from "../../../../core/interfaces/ImagesRepository";

export interface DropdownProps extends DefaultComponentProps {
    searchableDropdownObservable: SearchableDropdownObservable;
    activeItem: DropdownItemDetails;
    imagesRepository: ImagesRepository;
}

export interface DropdownState {
    items: DropdownItemDetails[];
    activeItem: DropdownItemDetails;
    isOpened: boolean;
}

export class SearchableDropdown extends React.Component<DropdownProps, DropdownState> {
    private dropdownObservable: SearchableDropdownObservable;

    public componentWillMount(): void {
        this.filterDropdown = this.filterDropdown.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);

        this.dropdownObservable = this.props.searchableDropdownObservable;
        this.dropdownObservable.getObservableItems().subscribe((items: DropdownItemDetails[]) => {
            this.setState({
                items,
            });
        });

        this.dropdownObservable.getObservableActiveItem().subscribe((activeItem: DropdownItemDetails) => {
            this.setState({
                activeItem,
            });
        });

        this.dropdownObservable.getObservableIsOpened().subscribe((isOpened: boolean) => {
            this.setState({
                isOpened,
            });
        });

        this.dropdownObservable.setActiveItem(this.props.activeItem);
        this.setState({
            isOpened: this.dropdownObservable.isOpened(),
            items: this.dropdownObservable.getItems(),
        });
    }

    public render() {
        return (
            <div className={`dropdown ${this.props.className || ""} ${this.getActiveStyleClass()}`}>
                {this.renderSearchInputField()}
                {this.renderActiveItemContainer()}
                {this.renderItemsContainer()}
                <button
                    className="button--no-style dropdown__arrow"
                    onClick={() => {
                        this.toggleDropdown();
                    }}>
                    <Icon
                        imagesRepository={this.props.imagesRepository}
                        iconName={IconFilenames.ARROW_DOWN}
                        alt="Arrow down"/>
                </button>
            </div>
        );
    }

    private getActiveStyleClass(): string {
        return this.state.isOpened ? "dropdown--active" : "";
    }

    private renderItemsContainer() {
        if (this.state.isOpened === false) {
            return "";
        }

        return <div className={`dropdown__items`}>
            {this.state.items.map((dropdownItemDetails: DropdownItemDetails) => {
                return (
                    <DropdownItem
                        onClick={() => this.setActiveItem(dropdownItemDetails)}
                        key={dropdownItemDetails.key}>
                        {dropdownItemDetails.name}
                    </DropdownItem>
                );
            })}
        </div>;
    }

    private renderSearchInputField() {
        if (this.state.isOpened === false) {
            return "";
        }

        return <input
            autoFocus
            className={`dropdown__box dropdown__search`}
            onChange={this.filterDropdown}
            onKeyPress={this.onKeyPress}
        />;
    }

    private renderActiveItemContainer() {
        if (this.state.isOpened === true) {
            return "";
        }

        return <div
            onClick={() => {
                this.dropdownObservable.setSearchText("");
                this.dropdownObservable.toggle();
            }}
            className={`dropdown__active-item dropdown__box`}>
            {this.state.activeItem.name}
        </div>;
    }

    private setActiveItem(dropdownItemDetails: DropdownItemDetails) {
        this.dropdownObservable.setActiveItem(dropdownItemDetails);
        this.dropdownObservable.close();
    }

    private filterDropdown(event) {
        const searchText = event.target.value;
        this.dropdownObservable.setSearchText(searchText);
    }

    private onKeyPress(e) {
        if (e.key !== "Enter") {
            return;
        }

        if (this.state.items.length === 0) {
            return;
        }

        this.setActiveItem(this.state.items[0]);
    }

    private toggleDropdown() {
        if (this.dropdownObservable.isOpened()) {
            return this.dropdownObservable.close();
        }

        this.dropdownObservable.open();
    }
}
