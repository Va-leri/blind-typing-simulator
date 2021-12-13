import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../types/actions';

export const loadText = createAction<string>(ActionType.LoadText);

export const setLoading = createAction(ActionType.SetLoading);

export const setTime = createAction(ActionType.SetTime);

export const addMistake = createAction(ActionType.AddMistake);

export const updateCurrentSymbolIndex = createAction(ActionType.UpdateCurrentSymbolIndex);

export const resetStatistics = createAction(ActionType.ResetStatistics);

export const setIsFinish = createAction<boolean>(ActionType.SetIsFinish);

export const setUnload = createAction(ActionType.SetUnload);

