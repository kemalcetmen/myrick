import React, { useRef,useState } from 'react';
import Dialogs from '../components/Dialogs'
import emailjs from '@emailjs/browser';
import Snackbar from '@mui/material/Snackbar';

export default function Email ({rick}) {
    const form = useRef();
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setTimeout(() => {
            setOpen(true);
        }, 1000)
      };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };
      
    const sendEmail = (e) => {
        e.preventDefault();
      
        emailjs.sendForm("service_c3zxzcb", "template_bw7ijde", form.current,"a6OGpkb5_zOB8s0lF")
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
      
    const contents =    
        <form ref={form} className="flex flex-col p-1" onSubmit={sendEmail}>
            <label className="font-bold ml-1">Name</label>
            <input className="rounded bg-slate-300" type="text" name="from_name" />
            <label className="font-bold ml-1">Email</label>
            <input className="rounded bg-slate-300" type="email" name="email_id" />
            <label className="font-bold ml-1">Message</label>
            <textarea placeholder="write me whatever you want" className="rounded bg-slate-300" name="message" />
            <input onClick={handleClick} className="bg-slate-700 w-1/2 mx-12 mt-1 cursor-pointer font-bold rounded-lg" type="submit" value="Send" />
        </form>

  return (
    <div>
        <Snackbar
              sx={{
                width: 250,
                mb:-2,
                ml:-2
              }}
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                message={"email sent :)"}
              />
        <Dialogs action='eatshit' cNameB='bg-black px-3 py-3 lg:p-8 2xl:px-16' rick={rick} 
        title='Send Mail' left='5%' contents={contents}/>
    </div>
  )
}


