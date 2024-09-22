import { serviceID, templateID, publicKey } from "../api"
import emailjs from '@emailjs/browser';

export const useSendEmail = () => {
    
  const sendEmail = (values) => {
      emailjs
        .send(serviceID, templateID, values, {
          publicKey: publicKey,
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

    return {sendEmail};
}