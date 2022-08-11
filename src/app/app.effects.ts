import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {changeUpdatedAt, clear, decrease, increase} from "./reducers/counter";
import {map} from "rxjs";

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {}
  // dispatch - false, чтобы не получать зацикливание
  //мы говрим в map, что если один из actions в ofType был задиспатчен, то мы должны заменить значение updatedAt
  updatedAt$ = createEffect(() => this.actions$.pipe(
    ofType(increase,decrease,clear),
    map(()=>changeUpdatedAt({updatedAt: Date.now()}))
  ))
}
