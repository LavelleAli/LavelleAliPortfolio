"use client";
import { useState } from "react";
import { createPortal } from "react-dom";
import axios from "axios";

const ContactModals = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState("idle");

  if (!isOpen) return null;

  async function sendMessage(formData) {
    setStatus("sending");

    try {
      await axios.post("https://formspree.io/f/xqpeqglw", formData, {
        headers: { Accept: "application/json" },
      });
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      console.error("Error sending message", err);
    }
  }

  // Reset the status so a reopened modal doesn't still show "sent" or "error"
  function handleClose() {
    setStatus("idle");
    onClose();
  }

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        onClick={handleClose}
        className="backdrop absolute inset-0 bg-black/70"
      ></div>

      <div className="relative bg-black border-0 rounded-lg shadow-[0_0_10px] shadow-sky-300/30 flex flex-col items-center p-8">
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close"
          className="absolute top-3 right-4 text-muted hover:text-sun"
        >
          ✕
        </button>

        <h5 className="text-sm text-sun ">Contact</h5>
        <h1 className="text-2xl font-bold">Get In Touch</h1>

        <div className="relative top-0 w-10 h-1 border-b border-sky-300 rounded-sm shadow-sm shadow-sky-300/50 z-1"></div>

        <p className="mt-8">
          Have a questions or want to work together? Send me a message.
        </p>

        <form
          action={sendMessage}
          className="w-150 h-100 flex flex-col items-center  mt-4 "
        >
          <label htmlFor="name" className="flex flex-col mb-1">
            <span className="text-sm text-sun ml-2">Name</span>
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            placeholder="Enter Name"  
            className="w-80 ml-2 mb-4 rounded-sm shadow-sm shadow-sky-300/30 focus:outline-none focus:shadow-md focus:shadow-sky-300"
          />

          <label htmlFor="email" className="flex flex-col mb-1">
            <span className="text-sm text-sun ml-2">Email</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="Enter Email"
            className="ml-2 w-80 mb-4 rounded-sm shadow-sm shadow-sky-300/30 focus:outline-none focus:shadow-md focus:shadow-sky-300"
          />

          <label htmlFor="message" className="flex flex-col ml-2">
            <span className="text-sm text-sun mb-2">Message</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Type message here"
            className="h-50 w-140 rounded-sm shadow-sm shadow-sky-300/40 focus:outline-none focus:shadow-md focus:shadow-sky-300"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-4 w-20 border border-sky-300 rounded-lg p-2 hover:text-sun hover:scale-95 transition-all duration-400 focus:outline-none focus:shadow-md focus:shadow-sky-300"
          >
            {status === "sending" ? "Sending..." : "Send"}
          </button>

          {status === "sent" && (
            <p className="text-sky-300 mt-2">Thanks! Your message was sent.</p>
          )}
          {status === "error" && (
            <p className="text-sun mt-2">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </div>,
    document.body,
  );
};

export default ContactModals;
