import { useDispatch, useSelector } from 'react-redux';
import { onAddNewReminder, onUpdateReminder, onDeleteReminder, onSetActiveReminder, onLoadReminders } from '../store';
import Swal from 'sweetalert2';
import { convertRemindersToDate } from '../helpers';

export const useReminderStore = () => {

    const dispatch = useDispatch();
    const { user } = useSelector( state => state.auth );
    
    const { 
        reminders,
        activeReminder
    } = useSelector( state => state.reminder );

    const setActiveReminder = ( reminder ) => {
        dispatch( onSetActiveReminder( reminder ))
    }

    const startSavingReminder = async( reminder ) => {
        
        try {
            if( reminder.id ) {
                // Actualizando
                // await reminderApi.put(`/reminders/${ reminder.id }`, reminder );
                dispatch( onUpdateReminder({ ...reminder, user}) );
                // return;
            } else {
                // Creando
                // const { data } = await reminderApi.post('/reminders', reminder );
                dispatch( onAddNewReminder({ ...reminder, id: new Date().getTime(), user }) );
            }
    

        } catch (error) {
            console.log(error);
            Swal.fire('Save error','', 'error');
            // Swal.fire('Save error', error.response.data.msg, 'error');
        }       
        
    }

    const startLoadingReminders = async() => {
        // dispatch( onChecking() );
        try {
            
            // const { data } = await reminderApi.get('/reminders');
            const response = await fetch("/data/reminders.json");
            const { data } = await response.json();

            const reminders = convertRemindersToDate(data.reminders);
            
            dispatch( onLoadReminders( reminders ) );

        } catch (error) {
          console.log('Error cargando eventos');
          console.log(error)
        }
    }

    const startDeleteReminder = async() => {
        try {
            
            // await reminderApi.delete(`/reminders/${ activeReminder.id }` );
            dispatch( onDeleteReminder() );

        } catch (error) {
          console.log('Error deleting reminder');
          console.log(error)
        }        
    }
   
    return {
        // properties
        reminders,
        activeReminder,
        hasReminderSelected: !!activeReminder,

        //Methods
        startDeleteReminder,
        setActiveReminder,
        startSavingReminder,
        startLoadingReminders
    }

}