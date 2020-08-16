import { CALL_API } from '../middlewares/api';
import { Action } from 'redux';
import { Method } from 'axios';

interface ICallApiInfo {
  types: string[];
  endpoint: string;
  method: Method;
  body: any;
}

export interface IApiAction extends Action {
  [CALL_API]: ICallApiInfo;
}

export default <T>(
  dispatch: any,
  { types, endpoint, method, body }: ICallApiInfo
) =>
  dispatch({
    type: '',
    [CALL_API]: {
      types,
      endpoint,
      method,
      body,
    },
  }) as Promise<T>;
