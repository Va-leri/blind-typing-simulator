import { BACKEND_URL } from '../const';
import { ThunkActionResult } from '../types/actions';
import { loadText, setUnload } from './actions';

export const fetchText = (): ThunkActionResult => async (dispatch, _getState, api) => {
  try {
    const { data } = await api.get(BACKEND_URL);
    dispatch(loadText(data));
  }
  catch {
    dispatch(setUnload);
  }
};


