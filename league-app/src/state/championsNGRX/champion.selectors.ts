import { createSelector, createFeatureSelector, select } from "@ngrx/store";
import { ChampionState } from "./champion.reducer";
export const selectChampionFeature  = 
createFeatureSelector<ChampionState>('champions');

export const selectAllChampions = createSelector(
  selectChampionFeature,
  (state) => state ? state.champions : []
);
export const selectChampionDetails = createSelector(
  selectChampionFeature,
  (state: ChampionState) => state.championDetails
);

export const selectSelectedChampionId = createSelector(
  selectChampionFeature,
  (state) => state.selectedChampionId
);
export const selectChampions = (state: ChampionState) => state.champions;

export const selectFilteredChampions = createSelector(
  selectChampionFeature,
  (state: ChampionState) => {
    if (!state) return [];

    const selectedRoles = state.selectedRoles || [];
    const allChampions = state.championDetails || [];

    if (selectedRoles.length === 0) return allChampions;

    return allChampions.filter(champion =>
      champion.tags.some((tag: string) => selectedRoles.includes(tag))
    );
  }
);