import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CanExitComponent } from '../../shared/auth/exit.guard';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Flight } from '@flight-workspace/flight-api';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html'
})
export class FlightEditComponent implements OnInit, CanExitComponent {

  id: string;
  showDetails: string;
  showWarning = false;

  sender: Observer<boolean>;
  flight: Flight;
  
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.id = p['id'];
      this.showDetails = p['showDetails'];
    });


    this.route.data.subscribe(data => {
      this.flight = data['flight'];
    });
  }

  decide(decision: boolean): void {
    this.sender.next(decision);
    this.sender.complete();
    this.showWarning = false;
  }

  canExit(): Observable<boolean> {
    return Observable.create((sender: Observer<boolean>) => {
      this.sender = sender;
      this.showWarning = true;
    });
  }

}
