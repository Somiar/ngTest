import { Component } from '@angular/core';
import { VillainListService } from './villain-list.service';

@Component({
    selector: 'villains-list',
    templateUrl: './villain-list.html',
    providers: [ VillainListService ],
})

export class VillainsListComponent {

}