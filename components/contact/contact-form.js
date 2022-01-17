import classes from "./contact-form.module.css";
import { useState,useEffect } from "react";
import Notification from "../ui/notification";


async function sendContactData(contactDetails) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
}

export default function ContactForm() {
  const [enteredEmail, setenteredEmail] = useState("");
  const [enteredName, setenteredName] = useState("");
  const [enteredMessage, setenteredMessage] = useState("");

  const [requestStatus, setrequestStatus] = useState(); // 'pending', 'success' , error

  const [requestError, setrequestError] = useState();

  useEffect(()=>{
    if (requestStatus === 'success' || requestStatus==='error') {
    const timer = setTimeout(()=>{

        setrequestStatus(null);
        setrequestError(null);
      },3000);
      return ()=>clearTimeout(timer)
    }

  },[requestStatus]);

  

  function sendMessageHandler(event) {
    event.preventDefault();
    //validate in client-side :option
    //
    setrequestStatus("pending");

    try {
      sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setrequestStatus("success");
      setenteredEmail('');
      setenteredMessage('');
      setenteredName('');
    } catch (error) {
      setrequestError(error.message);
      setrequestStatus("error");
    }
  }

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message",
      message: "Your message is on its ways !",
    };
  }
  if (requestStatus === "success") {
    notification = {
      status: "succes",
      title: "Success !",
      message: "Successfully",
    };
  }
  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error !",
      message: requestError,
    };
  }
  return (
    <section className={classes.contact}>
      <h2>How can I help you ?</h2>
      <form className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(e) => setenteredEmail(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(e) => setenteredName(e.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="5"
            required
            value={enteredMessage}
            onChange={(e) => setenteredMessage(e.target.value)}
          />
        </div>
        <div className={classes.actions}>
          <button onClick={sendMessageHandler}>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}
