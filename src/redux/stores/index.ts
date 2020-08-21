import storeDev from './dev.store';
import storeProd from './prod.store';
import reducers from 'reducers';

export type StoreState = ReturnType<typeof reducers>;

export function getConfigStore() {
  if (__DEV__) {
    return storeDev;
  } else {
    return storeProd;
  }
}
