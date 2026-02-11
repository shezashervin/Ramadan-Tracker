import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./slice/CounterSlice"
import themeReducer from "./slice/ThemeSlice"
import fontSliceReducer from './slice/FontSlice'
import customCounterReducer from './slice/CustomCounter'
import ramadanTrackerReducer from './slice/RamadanSlice'

import CartShoppingReducer from './slice/CartSlice'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(
    persistConfig, ramadanTrackerReducer
)

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        theme: themeReducer,
        FontControl: fontSliceReducer,
        CustomCounter: customCounterReducer,
        ramadan: persistedReducer,
        CartShopping: CartShoppingReducer,
    }
})
export const persistor = persistStore(store)