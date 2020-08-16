import { ErrorKeys } from 'actions/error.action';
import { AnyAction } from 'redux';

export interface IErrorState {
  error: null | { message: string };
}

const initial = {
  error: null,
};

export default function errorReducer (
  state: IErrorState = initial,
  action: AnyAction
): IErrorState {
  switch (action.type) {
    case ErrorKeys.SET_ERROR: {
      return { error: action.payload };
    }
    case ErrorKeys.CLEAR_ERROR: {
      return { error: null };
    }
    default:
      return state;
  }
}
