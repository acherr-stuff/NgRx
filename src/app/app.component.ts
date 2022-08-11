import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {clear, countSelector, decrease, increase, updatedAtSelector} from "./reducers/counter";
import {map} from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //counter = 0;
  //updatedAt?: number;
  count$ = this.store.select(countSelector); //получаем подписчик на состояние хранилища
  cannotDecrease$ = this.count$.pipe(map(count => count <=0))
  updatedAt$ = this.store.select(updatedAtSelector)

  constructor(private store: Store) {
  }

  get cannotDecrease(): boolean {
    return false
  }

  increase(): void {
    //this.updatedAt = Date.now();
    //this.counter = this.counter+1;
    this.store.dispatch(increase())
  }

  decrease(): void {
    //this.updatedAt = Date.now();
   // this.counter = this.counter-1;
    this.store.dispatch(decrease())

  }

  clear(): void {
   // this.updatedAt = Date.now();
    //this.counter = 0;
    this.store.dispatch(clear())

  }}
