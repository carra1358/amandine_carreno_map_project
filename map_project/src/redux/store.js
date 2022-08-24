import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import mapReducer from './mapSlice';
import mapListReducer from './mapListSlice';
import thunk from 'redux-thunk';


const persistConfig = {
    key: "root",
    storage,
}


const rootReducer = combineReducers({
    map: mapReducer,
    mapList: mapListReducer

})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: [thunk]
})

export default store;