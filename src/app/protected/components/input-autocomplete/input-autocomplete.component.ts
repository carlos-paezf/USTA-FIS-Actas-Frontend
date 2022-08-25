import { Component } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { IItemsMenu } from '../../interface';
import { ItemsService } from '../../services';
import { ITEMS_SEARCH } from '../../util';


@Component({
    selector: 'app-input-autocomplete',
    templateUrl: './input-autocomplete.component.html',
    styleUrls: ['./input-autocomplete.component.scss']
})
export class InputAutocompleteComponent {

    public term = ''
    public items: IItemsMenu[] = ITEMS_SEARCH

    constructor(private readonly _itemsService: ItemsService) { }

    /**
     * The function takes a string as an argument, and sets the term property to the value of the
     * argument
     * @param {string} newTerm - string - This is the new value of the search term.
     */
    private _setTerm(newTerm: string) {
        this.term = newTerm
    }

    /**
     * It gets the suggestions from the service and sets the items property to the results.
     */
    public searching() {
        this.items = this._itemsService.getSuggestions(this.term)
    }

    /**
     * When the user selects an item from the autocomplete dropdown, the term is set to the label of the
     * selected item, and the item is retrieved from the items service
     * @param {MatAutocompleteSelectedEvent} event - MatAutocompleteSelectedEvent
     */
    public optionSelected(event: MatAutocompleteSelectedEvent): void {
        const item: IItemsMenu = event.option.value
        this._itemsService.getItemByID(item.id)
        this._setTerm(item.label)
    }

}
