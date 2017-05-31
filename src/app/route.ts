

/**
 * Created by ayk on 2017/5/9.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard.component';
import { HeroesComponent } from './hero/heroes.component';
import { HeroDetail } from './hero-detail/hero-detail.component';
import { HeroListAnimationComponent } from './animations/hero-list-animation.component';
import { HeroTaxReturnComponent } from './hero-tax/hero-tax-return.component';
import { UserDetailComponent } from './form/user-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: Dashboard },
  { path: 'detail/:id', component: HeroDetail },
  { path: 'heroes',     component: HeroesComponent },
  { path: 'hero-list-animation', component: HeroListAnimationComponent },
  { path: 'hero-tax', component: HeroTaxReturnComponent },
  { path: 'form', component: UserDetailComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
