import {ExtraOptions, Routes, PreloadAllModules} from '@angular/router';
import {BasketComponent} from './basket/basket.component';
import {HomeComponent} from './home/home.component';
import { CustomPreloadingStrategy } from './shared/preloading/custom-preloading.strategy';

declare let System: any;

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'basket',
    component: BasketComponent,
    outlet: 'aux'
  },
  {
    path: 'flight-booking',
    loadChildren: './flight-booking/flight-booking.module#FlightBookingModule',
    data: {
      preload: false
    }
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]

export const APP_EXTRA_OPTIONS: ExtraOptions = {
  useHash: false,
  preloadingStrategy: CustomPreloadingStrategy
}


