import { createSlice } from '@reduxjs/toolkit';

export const reminderSlice = createSlice({
    name: 'reminder',
    initialState: {
        isLoadingEvents: true,
        reminders: [],
        activeReminder: null
    },
    reducers: {
        onSetActiveReminder: ( state, { payload }) => {
            state.activeReminder= payload;
        },
        onAddNewReminder: ( state, { payload }) => {
            state.reminders.push( payload );
            state.activeReminder = null;
        },
        onUpdateReminder: ( state, { payload } ) => {
            state.reminders = state.reminders.map( reminder => {
                if ( reminder.id === payload.id ) {
                    return payload;
                }

                return reminder;
            });
        },
        onLoadReminders: (state, { payload = [] }) => {
            state.isLoadingReminders = false;
            payload.forEach( reminder => {
                const exists = state.reminders.some( dbReminder => dbReminder.id === reminder.id );
                if ( !exists ) {
                    state.reminders.push( reminder )
                }
            })
        },
        onDeleteReminder: ( state ) => {
            if ( state.activeReminder ) {
                state.reminders = state.reminders.filter( reminder => reminder.id !== state.activeReminder.id );
                state.activeReminder = null;
            }
        },
        onLogoutReminder: ( state ) => {
            state.isLoadingEvents = true,
            state.events = []
            state.activeEvent = null
        }
    }
});


// Action creators are generated for each case reducer function
export const { onSetActiveReminder, onAddNewReminder, onUpdateReminder, onLoadReminders, onDeleteReminder, onLogoutReminder } = reminderSlice.actions;