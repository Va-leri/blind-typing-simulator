import { createReducer } from '@reduxjs/toolkit';
import { State } from '../types/state';
import { loadText, addMistake, setLoading, setTime, setUnload, updateCurrentSymbolIndex, resetStatistics, setIsFinish } from './actions';

const initialState: State = {
  time: 0,
  mistakes: 0,
  currentSymbolIndex: 0,
  text: '',
  isLoading: false,
  isDataLoaded: false,
  isFinish: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadText, (state, action) => {
      state.text = action.payload;
      state.isDataLoaded = true;
      state.isLoading = false;
    })
    .addCase(setUnload, (state) => {
      state.isDataLoaded = false;
      state.isLoading = false;
    })
    .addCase(setLoading, (state) => {
      state.isDataLoaded = false;
      state.isLoading = true;
    })
    .addCase(setTime, (state) => {
      ++state.time;
    })
    .addCase(addMistake, (state) => {
      ++state.mistakes;
    })
    .addCase(updateCurrentSymbolIndex, (state) => {
      ++state.currentSymbolIndex;
    })
    .addCase(resetStatistics, (state) => {
      state.currentSymbolIndex = 0;
      state.mistakes = 0;
      state.time = 0;
      state.isFinish = false;
    })
    .addCase(setIsFinish, (state, action) => {
      state.isFinish = action.payload;
    });
});
