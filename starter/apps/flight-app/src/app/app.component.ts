import { Component, OnInit } from '@angular/core';
import { Router, GuardsCheckStart, GuardsCheckEnd, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from "@angular/router";

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  showLoadingIndicator = false;

  constructor(
          private router: Router) {

              
      
    router.events
          .filter(e => e instanceof NavigationStart
                  || e instanceof GuardsCheckEnd)
          .subscribe(event => {
                  this.showLoadingIndicator = true;
          });

    router.events.filter(
                    e => e instanceof NavigationEnd
                        || e instanceof  NavigationError
                        || e instanceof NavigationCancel
                        || e instanceof GuardsCheckStart )
          .subscribe(event => {
                  this.showLoadingIndicator = false;
          });

    }
}
