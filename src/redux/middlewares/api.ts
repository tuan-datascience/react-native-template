import axios, { Method, AxiosResponse } from 'axios';
import getEnvVars from 'redux/environment';
import { Middleware, AnyAction } from 'redux';
import { IApiAction } from 'actions/dispatchApi.action';
import { LoadingKeys } from 'actions/loading.action';

export const CALL_API = 'CALL_API';
const { API_BASE_URL } = getEnvVars();

const callApi = async <R>(
  endpoint: string,
  method: Method,
  authToken: string,
  { data, params }: any
): Promise<AxiosResponse<R>> => {
  let url = endpoint;
  return await axios.request({
    baseURL: API_BASE_URL,
    url,
    method,
    data,
    params,
    headers: { Authorization: authToken ? `Bearer ${authToken}` : '' },
  });
};

const apiMiddleware: Middleware = (store) => (next) => async <R>(
  action: AnyAction
): Promise<R | null | { error: any }> => {
  if (!action[CALL_API]) {
    next(action);
    return null;
  }
  const { authToken } = store.getState().user || {};
  const [, reqSuccess] = action[CALL_API].types;

  // TODO: Loading when fetch data
  next({ type: LoadingKeys.SET_LOADING });

  // TODO: Fetch data
  const { endpoint, method, body } = (action as IApiAction)[CALL_API];
  try {
    const response = (await callApi(
      endpoint,
      method,
      authToken,
      body
    )) as AxiosResponse;
    next({
      type: reqSuccess,
      payload: response.data.data,
    });
    next({ type: LoadingKeys.REMOVE_LOADING });
    return response.data.data as R;
  } catch (error) {
    next({ type: LoadingKeys.REMOVE_LOADING });
    throw new Error(error);
  }
};

export default apiMiddleware;
