import React, { useEffect, useState } from 'react';

import { Navbar, FloatingButton, CardModal, Blank, BankCard, LicenceCard, BillCard, Banner } from '..';
import { useReminderStore, useSendEmail, useUiStore } from '../../hooks';
import { format, startOfToday } from 'date-fns';
import { useSelector } from 'react-redux';


export const ReminderPage = () => {

    const { openModal } = useUiStore();
    const { user } = useSelector( state => state.auth );

    const { reminders, setActiveReminder, startLoadingReminders } = useReminderStore();
    const { sendEmail } = useSendEmail();
    const [formValues, setFormValues] = useState({
        name: '',
        days: '',
        message: ''
      });

    const onClickReminder = (reminder) => {
        openModal();
        setActiveReminder(reminder)
    }

    useEffect(() => {        
        startLoadingReminders();
    }, []);
    
    
    // setInterval(() => {
    //         console.log('interval');
    //         verifyDays();
    //     }, 10000);

    // setInterval(verifyDays(), 86400000);

    const verifyDays = () => {
        const today = startOfToday();
        const messageReminders=[];
        let days = 0;
        let daysInt = 0;
        
        reminders.map(reminder => {          
            const difference = Math.abs(reminder.expDate.getTime() - today.getTime());            
            days = difference / (1000 * 3600 * 24);
            daysInt = Math.floor(days);    
            
            if (daysInt <= 3) {
                messageReminders.push(reminder.name+' expires on '+format(reminder.expDate, "PP" + ' \n'))    
            }            
        })
        if (messageReminders.length>0) {                     
            setFormValues({
                name: user.name,
                days: daysInt,
                message: messageReminders
            });
            if(formValues.name !== ''){      
                sendEmail(formValues);
            }
        }
    }

    useEffect(() => {
        //Implementing the setInterval method
        const interval = setInterval(() => {
            // verifyDays();
        }, 20000);
 
        //Clearing the interval
        return () => clearInterval(interval);
    }, [verifyDays]);


    // const sendReminderTo = () => {
    //     setFormValues({
    //         name: 'Marcia',
    //         days: '7',
    //         message: 'Tarjeta de credito vence el 24 de septtiembre'
    //       })
    // }

    // setInterval(() => {
    //     console.log('enviar');
    //     sendReminderTo();
    //     console.log(formValues);
        
    //     sendEmail();
    // }, 20000);

    // const sendEmail = () => {
    //     emailjs
    //       .send(VITE_API_SERVICE_ID, VITE_API_TEMPLATE_ID, formValues, {
    //         publicKey: VITE_API_PUBLIC_KEY,
    //       })
    //       .then(
    //         () => {
    //           console.log('SUCCESS!');
    //         },
    //         (error) => {
    //           console.log('FAILED...', error.text);
    //         },
    //       );
    //   };


    const reminders2 = [...reminders];
    if (reminders.length > 0) {
        
        reminders2.sort((a, b) => {
                let d1 = new Date(a.expDate)
                let d2 = new Date(b.expDate)
                if(d1>d2){
                    return 1
                }
                if (d1<d2) {                    
                    return -1
                }
            });            
    }

  return (
    < >
        <Navbar/>

        <div className="flex flex-col py-8">
            <div className="m-auto w-11/12 grid place-content-center">

                <Banner/>

                {
                    (reminders.length > 0)
                    ? <>
                        <h3 className="text-center md:text-left text-lg font-bold text-grayN-600">
                            Reminders
                        </h3>
                        <div className="py-4">
                            <hr className="border border-grayN-600" />
                        </div>
                        <div className="-space-y-16 md:space-y-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {
                            reminders2.map((reminder) => {

                                if(reminder.category === 'bank'){
                                    
                                    return <BankCard key={reminder.id} onClickReminder={onClickReminder} card={reminder} />

                                }

                                if(reminder.category === 'licence'){
                                    
                                    return <LicenceCard key={reminder.id} onClickReminder={onClickReminder} card={reminder} />

                                }

                                if(reminder.category === 'bill'){
                                    
                                    return <BillCard key={reminder.id} onClickReminder={onClickReminder} card={reminder} />

                                }

                            })
                        }
                        </div>

                    </>
                    : <Blank/>
                }

                <FloatingButton/>

            </div>
        </div>

        <CardModal/>
    </>

    )
}
