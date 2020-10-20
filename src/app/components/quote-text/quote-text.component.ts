import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-quote-text',
    templateUrl: './quote-text.component.html',
    styleUrls: ['./quote-text.component.sass']
})
export class QuoteTextComponent {
    title: string = 'Quote Text';
    @Input() text: string;
}
