import { FlightEditComponent } from '../../flight-booking/flight-edit/flight-edit.component';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

export interface CanExitComponent {
    canExit(): Observable<boolean>;
}

export class ExitGuard implements CanDeactivate<CanExitComponent> {
    canDeactivate(component: CanExitComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> {
        return component.canExit();
    }
}
