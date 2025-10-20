import { createSelector, createFeatureSelector, select } from "@ngrx/store";
import { ChampionState } from "./champion.reducer";
export const selectChampionFeature  = 
createFeatureSelector<ChampionState>('champions');

export const selectAllChampions = createSelector(
  selectChampionFeature,
  (state) => state.champions
);

export const selectSelectedChampionId = createSelector(
  selectChampionFeature,
  (state) => state.selectedChampionId
);