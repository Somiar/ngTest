import { HeroTaxReturnComponent } from './hero-tax/hero-tax-return.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './service/in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroDetail } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './hero/heroes.component';
import { Dashboard } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroListAnimationComponent } from './animations/hero-list-animation.component';
import { AppRoutingModule } from './route';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [
    AppComponent,
    HeroDetail,
    HeroesComponent,
    Dashboard,
    HeroSearchComponent,
    HeroListAnimationComponent,
    HighlightDirective,
    HeroTaxReturnComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
