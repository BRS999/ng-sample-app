import { Component, Input } from '@angular/core';

@Component({
    selector: 'simple-modal',
    templateUrl: './simpleModal.component.html',
    styleUrls: ['./simpleModal.component.scss']

})
export class SimpleModalComponent {
    @Input() title: string;
    @Input() elementId: string;

}