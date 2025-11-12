import { createReducer } from "@ngrx/store";
import { loadChampions, findChampion, loadChampionDetails } from "./champion.actions";
import { on } from "@ngrx/store";
import { toggleRoleFilter,resetRoleFilter } from "./champion.actions";

export interface ChampionState {

    champions: any[];
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
     selectedChampionId: string | null;
     selectedRoles: string[];
     championDetails: any[];
}
export const initialChampionState: ChampionState = {
    champions: [],
    error: '',
    status: 'pending',
     selectedChampionId: null,
     selectedRoles: [],
     championDetails: [],
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
  })),
  on(loadChampionDetails, (state, { championDetails }) => ({
    ...state,
    championDetails,
  })),
 on(toggleRoleFilter, (state, { role }) => ({
    ...state,
    selectedRoles: [role], 
  })),

  on(resetRoleFilter, (state) => ({
    ...state,
    selectedRoles: [],
  }))
);