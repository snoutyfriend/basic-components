import * as React from "react";
import {DefaultComponentProps} from "../../../../core/interfaces/DefaultComponentProps";
import {Icon} from "../../../icons/icon/components/Icon";
import {IconName} from "../../../icons/icon/components/IconContent";
import {DropdownObservable} from "../observables/DropdownObservable";
import {DropdownItemDetails} from "../observables/SimpleDropdownObservable";
import {DropdownItem} from "./DropdownItem";

export interface BasicDropdownProps extends DefaultComponentProps {
    dropdownObservable: DropdownObservable;
    activeItem?: DropdownItemDetails;
}

export interface BasicDropdownState {
    items: DropdownItemDetails[];
    activeItem: DropdownItemDetails;
    isOpened: boolean;
}

export class BasicDropdown extends React.Component<BasicDropdownProps, BasicDropdownState> {
    private dropdownObservable: DropdownObservable;

    public componentWillMount(): void {
        this.onKeyPress = this.onKeyPress.bind(this);

        this.dropdownObservable = this.props.dropdownObservable;
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

        if (this.props.activeItem !== undefined) {
            this.dropdownObservable.setActiveItem(this.props.activeItem);
        } else {
            this.setState({
                activeItem: this.dropdownObservable.getActiveItem(),
            });
        }

        this.setState({
            isOpened: this.dropdownObservable.isOpened(),
            items: this.dropdownObservable.getItems(),
        });
    }

    public render() {
        return (
            <div className={`dropdown ${this.props.className || ""} ${this.getActiveStyleClass()}`}>
                {this.renderActiveItemContainer()}
                {this.renderItemsContainer()}
                <button
                    className="button--no-style dropdown__arrow"
                    onClick={() => {
                        this.toggleDropdown();
                    }}>
                    <Icon
                        iconName={IconName.ARROW_DOWN}
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

    private renderActiveItemContainer() {
        return <div
            onClick={() => {
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
