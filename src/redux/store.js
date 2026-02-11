import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { configureStore } from '@reduxjs/toolkit'
import ramadanTrackerReducer from './slice/RamadanSlice'


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(
    persistConfig, ramadanTrackerReducer
)

export const store = configureStore({
    reducer: {
        ramadan: persistedReducer
    }
})
export const persistor = persistStore(store)