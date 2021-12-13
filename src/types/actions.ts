import { ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { loadText, addMistake, setLoading, setTime, updateCurrentSymbolIndex, resetStatistics, setIsFinish } from '../store/actions';
import { State } from './state';

export enum ActionType {
  LoadText = 'data/loadText',
  SetLoading = 'data/setLoading',
  SetUnload = 'data/setUnload',
  SetTime = 'service/setTime',
  AddMistake = 'service/setAccuracy',
  UpdateCurrentSymbolIndex = 'service/updateCurrentSymbolIndex',
  ResetStatistics = 'service/resetStatistics',
  SetIsFinish = 'service/setIsFinish',
}


type Actions =
  ReturnType<typeof loadText>
  | ReturnType<typeof setLoading>
  | ReturnType<typeof setTime>
  | ReturnType<typeof addMistake>
  | ReturnType<typeof updateCurrentSymbolIndex>
  | ReturnType<typeof resetStatistics>
  | ReturnType<typeof setIsFinish>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
