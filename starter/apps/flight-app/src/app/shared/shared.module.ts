import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ModuleWithProviders} from '@angular/core';
import {CityPipe} from './pipes/city.pipe';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { ExitGuard } from './auth/exit.guard';
import { FlightResolver } from '../flight-booking/flight-edit/flight.resolver';
import { CustomPreloadingStrategy } from './preloading/custom-preloading.strategy';
import { FormGroup } from '@angular/forms';
// import { LoggerModule, DefaultLogFormatterService } from '@my/logger-lib';


@NgModule({
  imports: [
    CommonModule,

    /*
    LoggerModule.forRoot({
      enableDebug: false,
      logFormatterImplementation: DefaultLogFormatterService
    }),
    */
  ],
  declarations: [
    CityPipe,
  ],
  providers: [
  ],
  exports: [
    CityPipe,
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        AuthGuard,
        AuthService, // Ich werde das noch bereuen!
        ExitGuard,
        FlightResolver,
        CustomPreloadingStrategy
      ]
    }
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    }
  }

}
