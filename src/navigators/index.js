import React from 'react';
import {CommonActions, StackActions} from '@react-navigation/native';

export const navigationRef = React.createRef();

export const navigate = (routeName, params) => {
  navigationRef?.current?.navigate(routeName, params);
};

export const reset = routeName => {
  navigationRef?.current?.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [{name: routeName}],
    }),
  );
};

export const goBack = () => navigationRef?.current?.goBack();

export const currentRoute = () => navigationRef.current?.getCurrentRoute();

export const push = (screenCount, params) => {
  navigationRef?.current?.dispatch(StackActions.push(screenCount, params));
};

export const setParams = params => {
  navigationRef?.current?.dispatch(CommonActions.setParams(params));
};

export const pop = screenCount => {
  navigationRef?.current?.dispatch(StackActions.pop(screenCount));
};

export const popToTop = screenCount => {
  navigationRef?.current?.dispatch(StackActions.popToTop());
};

export default {
  navigate,
  goBack,
  reset,
  currentRoute,
  pop,
  push,
  setParams,
};
