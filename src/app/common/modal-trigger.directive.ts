import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQUERY_TOKEN } from '../shared';

@Directive({
    selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {

    private el: HTMLElement;
    @Input('modal-trigger') modalId: string; // Alias

    constructor(@Inject(JQUERY_TOKEN) private $: any, ref: ElementRef) {
        this.el = ref.nativeElement;
    }

    ngOnInit(): void {
        this.el.addEventListener('click', e => {
            this.$(`#${this.modalId}`).modal({});
        });
    }
}