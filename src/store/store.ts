import { postAPI } from '../services/PostService';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";

const rootReducer = combineReducers({
    userReducer,
    [postAPI.reducerPath]: postAPI.reducer,
})

export const setupStore = () => {
    return configureStore({    // like createStore in plain Redux
        reducer: rootReducer,  // devTools and middleware included by default
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(postAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];