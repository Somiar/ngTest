import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { HeroService } from '../hero/hero.service';

@Component({
    animations: [
        trigger('heroState', [
            state('active', style({
                backgroundColor: '#eeefff',
                transform: 'scale(1.1)'
            })),
            state('inactive', style({
                backgroundColor: '#eeefff',
                transform: 'scale(1.1)'
            })),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out'))
        ]),
    ],
    templateUrl: './animationtest.html',
    styleUrls: ['hero-list-animation.css'],
    selector: 'hero-list-animation'
})

export class HeroListAnimationComponent {
    @Input() heroes: HeroService;
}