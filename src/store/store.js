import { configureStore } from '@reduxjs/toolkit';
import { uiSlice, reminderSlice, authSlice } from './';


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        reminder: reminderSlice.reducer,
        ui:uiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})