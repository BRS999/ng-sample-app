import { Component, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { JQUERY_TOKEN } from '../shared';

@Component({
    selector: 'simple-modal',
    templateUrl: './simpleModal.component.html',
    styleUrls: ['./simpleModal.component.scss']

})
export class SimpleModalComponent {
    @Input() title: string;
    @Input() elementId: string;
    @ViewChild('modalContainer') containerEl: ElementRef; //Wrapper to dom node

    constructor(@Inject(JQUERY_TOKEN) private $: any) {

    }

    closeModal() {
        console.log(this.containerEl.nativeElement);
        this.$(this.containerEl.nativeElement).modal('hide');
    }
}