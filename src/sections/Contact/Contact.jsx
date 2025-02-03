import React, { useRef } from 'react';
import styles from './ContactStyles.module.css';
import emailjs from "@emailjs/browser";
import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';


function Contact() {
  const form = useRef();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
      'service_26r0i0b',
      'template_bya2hpr',
      form.current,
      {
        publicKey: '9GJ6eTHTpGXFRalR-',  // Wrap the public key in quotes
      }
    )
      .then(
        () => {
          setMessage('Email sent successfully!');
          setOpen(true);
        },
        (error) => {
          setMessage(`Failed: ${error.text}`);
          setOpen(true);
        },
      );
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            required
            name="user_name"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="user_email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Send" />
      </form>

      {/* Success Snackbar */}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <SnackbarContent
          message={message}
          sx={{
            backgroundColor: 'green', // Set background color to green
            color: 'white',           // Set text color to white
            borderRadius: '8px',      // Optional: rounded corners
            padding: '12px 24px',     // Optional: padding for better appearance
          }}
        />
      </Snackbar>
    </section>
  );
}

export default Contact;
