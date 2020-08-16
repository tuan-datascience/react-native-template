import React from 'react';
import { useSelector } from 'react-redux';
import { StoreState } from 'redux/stores';
import { ILoadingState } from 'redux/reducers/loading.reducer';
import { View } from 'react-native';
import { IErrorState } from 'redux/reducers/error.reducer';

type GetState = {
  loadingState: ILoadingState;
  errorState: IErrorState;
};

const Root = () => {
  const { loadingState, errorState } = useSelector<StoreState, GetState>(
    (state) => ({
      loadingState: state.loading,
      errorState: state.error,
    })
  );

  return (
    <>
      {loadingState.isLoading && <View />}
      {errorState.error && <View />}
    </>
  );
};

export default Root;
