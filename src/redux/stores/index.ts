import storeDev from './dev.store';
import storeProd from './prod.store';
import { IErrorState } from 'reducers/error.reducer';
import { ILoadingState } from 'reducers/loading.reducer';

export type StoreState = {
  loading: ILoadingState;
  error: IErrorState;
};

export function getConfigStore() {
  if (__DEV__) {
    return storeDev;
  } else {
    return storeProd;
  }
}
