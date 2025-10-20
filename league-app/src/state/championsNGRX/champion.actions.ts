import {createAction,props} from '@ngrx/store';


export const loadChampions = createAction(
    '[Champions Page] Load Champions',
    props<{ champions: [] }>()
);
export const findChampion = createAction(
    '[Champion Card] Find Champion',
    props<{ championId: string }>()
);