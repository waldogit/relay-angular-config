import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CombinedComponent } from './combined/combined.component';

let defaultLocale = 'nl';
if (navigator?.languages) {
  defaultLocale = navigator.languages[0];
}
if (defaultLocale !== 'nl') {
  defaultLocale = 'en'
}
const appRoutes: Routes = [
  {
    path: ':todo',
    component: CombinedComponent
  },
  {
    path: '**',
    component: AppComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class RoutingModule { }
