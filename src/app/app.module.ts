import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
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
import { HeroTaxReturnComponent } from './hero-tax/hero-tax-return.component';
import { UserDetailComponent } from './form/user-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    ReactiveFormsModule,
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
    UserDetailComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
