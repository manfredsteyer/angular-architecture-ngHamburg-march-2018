import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Flight, FlightService } from '@flight-workspace/flight-api';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';


@Injectable()
export class FlightResolver implements Resolve<Flight> {
    
    constructor(private flightService: FlightService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Flight> {
        let id = route.params['id'];
        return this.flightService.findById(id);
    }
    
}