export default (state, action) => {
    switch (action.type) {
      case "TODO_CREATE_COMMIT":
        state.offline.outbox = state.offline.outbox.map(entry => {
          switch (entry.type) {
            case "TODO_CHANGE_COMPLETE":
            case "TODO_DELETE":
              entry.meta.offline.effect.url = entry.meta.offline.effect.url.replace(action.meta.localId, action.payload.id)
              entry.payload.id = action.payload.id;
              return {...entry};

            default:
              return entry;
          }
        })
        return {...state};

      default:
        return state;

    }
};
