import { createReducer } from "@ngrx/store";
import { loadChampions } from "./champion.actions";
import { on } from "@ngrx/store";

export interface ChampionState {

    champions: any[]; // Replace 'any' with your Champion model if available
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}
export const initialChampionState: ChampionState = {
    champions: [],
    error: '',
    status: 'pending',
} 
export const championReducer = createReducer(
    initialChampionState,
   on(loadChampions, (state:ChampionState, { champions }) => ({
        ...state,
        champions: [...champions],})))