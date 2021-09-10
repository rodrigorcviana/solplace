import { createStore, applyMiddleware } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import storageSession from "redux-persist/lib/storage/session"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

// persistConfig with whitelist example
const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["user"] // only user will be persisted
}

const persistedReducer = persistReducer(persistConfig, (
  state = { token: null, isAuthenticated: false }, action = {}
) => {
  switch (action.type) {
    case 'USER_LOGGED_IN':
      return action.user;
    case 'USER_LOGGED_OUT':
      return { token: null, isAuthenticated: false }
    default:
      return state;
  }
});

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

const persistor = persistStore(store)

export { store, persistor }
