import {HttpClientModule} from '@angular/common/http';

// import { LoggerModule } from '@my/logger-lib';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FlightApiModule} from '@flight-workspace/flight-api';

import {AppComponent} from './app.component';
import {APP_EXTRA_OPTIONS, APP_ROUTES} from './app.routes';
import {BasketComponent} from './basket/basket.component';
import {FlightBookingModule} from './flight-booking/flight-booking.module';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SharedModule} from './shared/shared.module';
import {SidebarComponent} from './sidebar/sidebar.component';

// import { CustomLogFormatterService } from './shared/logger/custom-log-formatter.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,

    // FlightBookingModule, // Würde Lazy Loading verhindern
    SharedModule.forRoot(),

    /*
    LoggerModule.forRoot({
      enableDebug: false,
      logFormatterImplementation: CustomLogFormatterService
    }),
    */

    FlightApiModule.forRoot(),

    

    RouterModule.forRoot(APP_ROUTES, APP_EXTRA_OPTIONS)
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    BasketComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
