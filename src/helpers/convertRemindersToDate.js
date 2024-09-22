import { parseISO } from "date-fns";

export const convertRemindersToDate = ( reminders = []) => {
    return reminders.map(reminder => {
        reminder.expDate = parseISO( reminder.expDate );

        return reminder;
    })
}