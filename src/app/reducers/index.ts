import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {countReducer,CounterState, COUNTER_KEY} from "./counter";

export interface State {
  [COUNTER_KEY]: CounterState
}

export const reducers: ActionReducerMap<State> = {
  [COUNTER_KEY]: countReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
