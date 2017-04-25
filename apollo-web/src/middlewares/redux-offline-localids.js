export default (userConfig: $Shape<Config> = {}) => (createStore: any) => (
  reducer: any,
  preloadedState: any,
  enhancer: any = x => x
) => {

  const rootReducer = (state, action) => {
    const intermediateState = reducer(state, action);
    const finalState = userConfig.reducer(intermediateState, action);
    return finalState;
  }

  return createStore(rootReducer, preloadedState, enhancer)
};
