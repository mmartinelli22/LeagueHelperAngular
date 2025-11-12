import {createAction,props} from '@ngrx/store';


export const loadChampions = createAction(
    '[Champions Page] Load Champions',
    props<{ champions: [] }>()
);
export const findChampion = createAction(
    '[Champion Card] Find Champion',
    props<{ championId: string }>()
);
export const toggleRoleFilter = createAction(
    '[Landing Page] Toggle Role Filter',
  props<{ role: string }>()
);
export const loadChampionDetails = createAction(
    '[Champion Details] Load Champion Details',
    props<{ championDetails: any[] }>()
);
export const resetRoleFilter = createAction('[Champion] Reset Role Filter');