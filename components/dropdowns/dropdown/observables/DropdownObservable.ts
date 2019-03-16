import {Subject} from "rxjs";
import {DropdownItemDetails} from "./SimpleDropdownObservable";

export interface DropdownObservable {
    toggle(): void;
    open(): void;
    close(): void;
    isOpened(): boolean;
    setActiveItem(active: DropdownItemDetails): void;
    setItems(items: DropdownItemDetails[]): void;
    getItems(): DropdownItemDetails[];
    getObservableItems(): Subject<DropdownItemDetails[]>;
    getObservableActiveItem(): Subject<DropdownItemDetails>;
    getObservableIsOpened(): Subject<boolean>;
}
