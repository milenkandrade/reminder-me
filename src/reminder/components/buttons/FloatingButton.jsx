import React from 'react';
import { useReminderStore, useUiStore } from '../../../hooks';

export const FloatingButton = () => {

  const { openModal } = useUiStore();
  const { setActiveReminder } = useReminderStore();

  const handleClickNew = () => {
    setActiveReminder({
        name: '',
        category: '',
        expDate: new Date(),
        number: '',
        user: {
            id: '',
            name: ''
        }
    });
    openModal();
  }

  return (
    <div onClick={handleClickNew} className="fixed bottom-0 right-0 p-6 md:p-10">
        <div className="size-16 md:size-20 bg-grayN-600 text-grayN-100 rounded-full flex items-center justify-center cursor-pointer transform transition duration-150 hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12 md:size-16">
                <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
            </svg>
        </div>
    </div>
  )
}
