import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";

const rootReducer = combineReducers({
    userReducer
})

export const setupStore = () => {
    return configureStore({    // like createStore in plain Redux
        reducer: rootReducer,  // devTools and middleware included by default
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];