import { Component } from '@angular/core';

@Component({
    selector:'hero-tax',
    templateUrl: './hero-tax-return.html',
    styleUrls: ['./hero-tax-return.css'],
})

export class HeroTaxReturnComponent {
    title = 'HeroTax';
    names = ['Somiar', 'Angular'];
    selectedName = '';

    getTaxForm(name) {
        this.selectedName = name;
    }
}