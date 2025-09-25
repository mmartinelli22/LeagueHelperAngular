import {createAction,props} from '@ngrx/store';


export const loadChampions = createAction(
    '[Champions Page] Load Champions',
    props<{ champions: [] }>()
);