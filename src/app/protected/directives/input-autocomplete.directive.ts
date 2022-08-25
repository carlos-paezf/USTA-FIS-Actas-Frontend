import { Directive, Input, ElementRef, OnInit } from '@angular/core';


@Directive({
    selector: '[appInputAutocomplete]'
})
export class InputAutocompleteDirective implements OnInit {

    private _htmlElement: ElementRef<HTMLElement>
    private _backgroundColor = 'var(--primary-lighter)'

    constructor(private readonly _elementRef: ElementRef<HTMLElement>) {
        this._htmlElement = this._elementRef
    }

    ngOnInit(): void {
        this._setBackgroundColor()
    }

    /**
     * The setter function is called when the backgroundColor property is set
     * @param {string} backgroundColor - string
     */
    @Input() set backgroundColor(backgroundColor: string) {
        this._backgroundColor = backgroundColor
        this._setBackgroundColor()
    }

    /**
     * _setBackgroundColor() sets the background color of the HTML element to the value of the
     * _backgroundColor property
     */
    private _setBackgroundColor() {
        this._htmlElement.nativeElement.style.backgroundColor = this._backgroundColor
    }
}
