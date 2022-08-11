import {createAction, createFeatureSelector, createReducer, createSelector, on, props} from "@ngrx/store";

export const COUNTER_KEY = "counter";

export const increase = createAction("[COUNTER] increase")
export const decrease = createAction("[COUNTER] decrease")
export const clear = createAction("[COUNTER] clear")
//редьюсер не может получить измененное время, т к это side effect, так что передаем это время через аргументы
export const changeUpdatedAt = createAction("[COUNTER] change updated at", props<{updatedAt: number}>())


export interface CounterState {
  count: number,
  updatedAt?: number
}

export const initialState: CounterState = {
  count: 0
}

export const countReducer = createReducer(
  initialState,
  on(increase, state => ({
    ...state, //с помощью точек копируем state
    count: state.count+1
  })),
  on(decrease, state => ({
    ...state, count: state.count-1
  })),
  on(clear, state => ({
    ...state, count: 0
  })),
  on(changeUpdatedAt, (state, action) => ({
    ...state,
    updatedAt: action.updatedAt
  }))
)

export const feautureSelector = createFeatureSelector<CounterState>(COUNTER_KEY)
export const countSelector = createSelector(feautureSelector, state => state.count)
export const updatedAtSelector = createSelector(feautureSelector, state => state.updatedAt)
