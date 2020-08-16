import { Dispatch } from 'redux';

export enum ErrorKeys {
  SET_ERROR = 'SET_ERROR',
  CLEAR_ERROR = 'CLEAR_ERROR',
}
export const setError = (message: string) => (dispatch: Dispatch) =>
  dispatch({
    type: ErrorKeys.SET_ERROR,
    payload: { message },
  });

export const clearError = () => (dispatch: Dispatch) =>
  dispatch({
    type: ErrorKeys.CLEAR_ERROR,
  });
