import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import postsReducer from '../features/posts/postsSlice';
import usersReducer from '../features/users/usersSlice';
import thunk from "redux-thunk";


const reducers = combineReducers({
    users: usersReducer,
    posts: postsReducer
})


const persistConfig = {
    key: 'root',
    storage: storage,
}
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],
})

export default store;

