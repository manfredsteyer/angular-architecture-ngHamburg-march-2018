import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoggerModule } from '@my/logger-lib';
                                // ^
                                // +--- Node_modules?
                                // +--- relative Pfade
                                // +--- Alias

@NgModule({
  imports: [
    BrowserModule,
    LoggerModule.forRoot({
      enableDebug: true
    })
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
