import {Subject} from "rxjs";
import {DropdownObservable} from "./DropdownObservable";

export interface DropdownItemDetails {
    key: string;
    name: string;
}

export class SimpleDropdownObservable implements DropdownObservable{
    private observableItems: Subject<DropdownItemDetails[]> = new Subject();
    private observableActiveItem: Subject<DropdownItemDetails> = new Subject();
    private observableIsOpened: Subject<boolean> = new Subject();

    private items: DropdownItemDetails[];
    private activeItem: DropdownItemDetails;
    private _isOpened: boolean = false;

    constructor(dropDownItems: DropdownItemDetails[]) {
        this.setItems(dropDownItems);

        if (this.items.length > 0) {
            this.setActiveItem(this.items[0]);
        }
    }

    public toggle() {
        if (this.isOpened() === true) {
            this.close();
            return;
        }

        this.open();
    }

    public open() {
        this._isOpened = true;
        this.observableIsOpened.next(true);
    }

    public close() {
        this._isOpened = false;
        this.observableIsOpened.next(false);
    }

    public isOpened(): boolean {
        return this._isOpened;
    }

    public setActiveItem(activeItem: DropdownItemDetails) {
        this.activeItem = activeItem;
        this.observableActiveItem.next(activeItem);
    }

    public setItems(items: DropdownItemDetails[]) {
        this.items = items;
        this.observableItems.next(items);
    }

    public getObservableItems(): Subject<DropdownItemDetails[]> {
        return this.observableItems;
    }

    public getObservableActiveItem(): Subject<DropdownItemDetails> {
        return this.observableActiveItem;
    }

    public getObservableIsOpened(): Subject<boolean> {
        return this.observableIsOpened;
    }

    public getItems(): DropdownItemDetails[] {
        return this.items;
    }
}
