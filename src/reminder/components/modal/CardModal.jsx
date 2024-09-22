import React, { useEffect, useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { startOfToday } from 'date-fns';
import Swal from 'sweetalert2';
import { useReminderStore, useUiStore } from '../../../hooks';
import { DeleteButton } from '../buttons/DeleteButton';


export const CardModal = () => {

  const now = startOfToday();

  const { isModalOpen, closeModal } = useUiStore();

  const { activeReminder, startSavingReminder } = useReminderStore();

  const [formValues, setFormValues] = useState({
    name: '',
    category: '',
    expDate: new Date(),
    number: ''
  });

  useEffect(() => {
    if(activeReminder !== null) {      
      setFormValues( { ...activeReminder });   
    }
  
  }, [activeReminder])
  

  const onInputChanged = ({ target }) => {
    setFormValues({
        ...formValues,
        [target.name]: target.value
    })
  }

  const onDateChanged = (event, changing) => {
    setFormValues({
      ...formValues,
      [changing]: event
    })
  }

  const onSubmit = async( event ) => {
    event.preventDefault();    
    
    if ( formValues.name.length <= 0 || formValues.category === "" ) {
      Swal.fire({
        title: 'Enter a name and a category for the reminder',
        icon: 'error',
        confirmButtonText: 'OK'
      })
      return
    }    

    await startSavingReminder( formValues );
    closeModal();
  }

  return (
    <Dialog open={isModalOpen} onClose={closeModal} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <form className="w-full max-w-lg" onSubmit={ onSubmit }>
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                      {
                        activeReminder && activeReminder.name ? "Edit Reminder" : "New Reminder"
                      }
                    </DialogTitle>
                    <div className="mt-2">
                        <div className="flex flex-wrap -mx-3 mb-6">
                          <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                              Reminder Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                              id="reminder-name"
                              name="name"
                              type="text" 
                              placeholder="Reminder card"
                              value={formValues.name}
                              onChange={onInputChanged}
                            />
                          </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">                          
                          <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                              Category
                            </label>
                            <div className="relative">
                            <select
                              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              name="category"
                              onChange={ onInputChanged }
                              defaultValue={ activeReminder ? activeReminder.category : ""}
                            >
                              <option value="">Select...</option>
                              <option value="bank">Bank</option>
                              <option value="licence">Licence/Credential</option>
                              <option value="bill">Bill</option>
                            </select>

                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                              </div>
                            </div>
                          </div> 
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                              Reminder Number (Optional)
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                              id="reminder-number" 
                              type="text" 
                              placeholder="90210"
                              name="number"
                              value={formValues.number}
                              onChange={onInputChanged}
                            />
                          </div>
                          {/* <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                              State
                            </label>
                            <div className="relative">
                              <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option>New Mexico</option>
                                <option>Missouri</option>
                                <option>Texas</option>
                              </select>
                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                              </div>
                            </div>
                          </div> */}
                          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                              Expiration date
                            </label>
                            <DatePicker 
                              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              selected={formValues.expDate}
                              onChange={ (event) => onDateChanged(event, 'expDate') }
                              minDate={now}
                            />                            
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="submit"
                  className="inline-flex w-full justify-center rounded-md bg-grayN-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-grayN-500 sm:ml-3 sm:w-auto"
                  >
                  Save
                </button>
                <button
                  type="button"
                  data-autofocus
                  onClick={() => closeModal()}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:ml-6 sm:mt-0 sm:w-auto"
                  >
                  Cancel
                </button>
                <div className="mx-10">
                  <DeleteButton/>
                </div>
              </div>
            </form>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
