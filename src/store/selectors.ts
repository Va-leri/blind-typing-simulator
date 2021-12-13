import { State } from '../types/state';

export const getTime = (state: State): number => state.time;

export const getMistakes = (state: State): number => state.mistakes;

export const getCurrentSymbolIndex = (state: State): number => state.currentSymbolIndex;

export const getText = (state: State): string => state.text;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const getIsDataLoaded = (state: State): boolean => state.isDataLoaded;

export const getIsFinish = (state: State): boolean => state.isFinish;
