import { Component } from '@angular/core';
import { HeroService } from './hero/hero.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService],
})

export class AppComponent {
  title = 'Hero Link';
  //color = 'yellow';
}

/*export class AppComponent implements OnInit{
  title = 'Tour of Heroes';
  public heroes;
  selectedHero: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeros();
  }

  getHeros() {
    this.heroes = this.heroService.getHeros();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}*/
