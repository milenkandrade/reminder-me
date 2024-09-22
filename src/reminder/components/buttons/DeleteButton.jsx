import React from 'react';
import { useReminderStore, useUiStore } from '../../../hooks';

export const DeleteButton = () => {

    const { startDeleteReminder, activeReminder } = useReminderStore();
    const { closeModal } = useUiStore();

    const handleDelete = () => {
        startDeleteReminder();
        closeModal();
    }
    

  return (
    <button
        type="button"
        data-autofocus
        onClick={() => handleDelete()}
        style={{display: activeReminder && activeReminder.name ? '' : 'none'}}
        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-red-600 hover:bg-red-500 hover:text-white sm:mt-0 sm:w-auto"
    >
        Delete
    </button>
  )
}
