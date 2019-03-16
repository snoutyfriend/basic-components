import {Subject} from "rxjs";
import {DropdownObservable} from "./DropdownObservable";
import {DropdownItemDetails, SimpleDropdownObservable} from "./SimpleDropdownObservable";

export class SearchableDropdownObservable implements DropdownObservable {
    private simpleDropdownObservable: SimpleDropdownObservable;
    private searchText: string;
    private allItems: DropdownItemDetails[];

    constructor(items: DropdownItemDetails[]) {
        this.simpleDropdownObservable = new SimpleDropdownObservable(items);
        this.allItems = items;
    }

    public close(): void {
        this.simpleDropdownObservable.close();
    }

    public getObservableActiveItem(): Subject<DropdownItemDetails> {
        return this.simpleDropdownObservable.getObservableActiveItem();
    }

    public getObservableIsOpened(): Subject<boolean> {
        return this.simpleDropdownObservable.getObservableIsOpened();
    }

    public getObservableItems(): Subject<DropdownItemDetails[]> {
        return this.simpleDropdownObservable.getObservableItems();
    }

    public isOpened(): boolean {
        return this.simpleDropdownObservable.isOpened();
    }

    public open(): void {
        this.simpleDropdownObservable.open();
    }

    public setActiveItem(active: DropdownItemDetails): void {
        this.simpleDropdownObservable.setActiveItem(active);
    }

    public setItems(items: DropdownItemDetails[]): void {
        this.simpleDropdownObservable.setItems(items);
        this.allItems = items;
    }

    public toggle(): void {
        this.simpleDropdownObservable.toggle();
    }

    public setSearchText(text: string) {
        this.searchText = text;

        if (this.searchText.length === 0) {
            this.simpleDropdownObservable.setItems(this.allItems);
            return;
        }

        const filteredItems = this.getFilteredItemsByName(text);
        this.simpleDropdownObservable.setItems(filteredItems);
    }

    public getSearchText() {
        return this.searchText;
    }

    public getItems(): DropdownItemDetails[] {
        return this.allItems;
    }

    private getFilteredItemsByName(text: string) {
        return this.allItems.filter((item: DropdownItemDetails) => {
            return RegExp(`${text.toLowerCase()}*`).test(item.name.toLowerCase());
        });
    }
}
