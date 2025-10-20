import { createReducer } from "@ngrx/store";
import { loadChampions } from "./champion.actions";
import { on } from "@ngrx/store";
import { findChampion } from "./champion.actions";

export interface ChampionState {

    champions: any[];
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
     selectedChampionId: string | null;
}
export const initialChampionState: ChampionState = {
    champions: [],
    error: '',
    status: 'pending',
     selectedChampionId: null,
} 
export const championReducer = createReducer(
   initialChampionState,
  on(loadChampions, (state, { champions }) => ({
    ...state,
    champions,
  })),
  on(findChampion, (state, { championId }) => ({
    ...state,
    selectedChampionId: championId,
  })) 
);