import { PreloadingStrategy, Route } from "@angular/router";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';
import { delay, switchMap } from 'rxjs/operators';

@Injectable()
export class CustomPreloadingStrategy implements PreloadingStrategy {
    
    preload(route: Route, fn: () => Observable<any>): Observable<any> {

        if (route.data && route.data['preload']) {
            return fn();
        }

        return of(null);
    }

}