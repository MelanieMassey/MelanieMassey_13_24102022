import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../feature/loginSlice";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// import thunk from "redux-thunk"; // will intercept and stop non-serializable values in action before they get to the reducer
// import storageSession from "redux-persist/lib/storage/session";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
}

const persistedReducer = persistReducer(persistConfig, loginReducer)


export const store = configureStore({
    // Reducer "login: loginReducer" remplacé par persistedReducer
    // persistedReducer est un Reducer amélioré avec possibilité de "persistence" du loginReducer sur le localStorage
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    // middleware: [thunk] => already included in configureStore
})

// On passe le store en paramètre de persistStore qui est la fonction qui va "persists & rehydrates" le State
export const persistor = persistStore(store)
