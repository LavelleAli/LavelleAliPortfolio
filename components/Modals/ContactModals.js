"use client";
import { createPortal } from "react-dom";

const ContactModals = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        onClick={onClose}
        className="backdrop absolute inset-0 bg-black/70"
      ></div>

      <div className="relative bg-black border-0 rounded-lg shadow-[0_0_10px] shadow-sky-300/30 flex flex-col items-center p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-4 text-muted hover:text-sun"
        >
          ✕
        </button>

        <h5 className="text-sm text-sun ">Contact</h5>
        <h1 className="text-2xl font-bold">Get In Touch</h1>

        <div className="relative top-0 w-10 h-1 border-b border-sky-300 rounded-sm shadow-sm shadow-sky-300/50 z-1"></div>

        <p className="mt-8">
          Have a question or want to work together? Send me a message.
        </p>

        <form
          action="POST"
          className="w-150 h-100 flex flex-col items-center  mt-4 "
        >
          <label className="flex flex-col mb-1">
            <span className="text-sm text-sun ml-2">Name</span>
          </label>
          <input
            type="text"
            name="Name"
            placeholder="Enter Name"
            className="w-80 ml-2 mb-4 rounded-sm shadow-sm shadow-sky-300/30"
          />

          <label className="flex flex-col mb-1">
            <span className="text-sm text-sun ml-2">Email</span>
          </label>
          <input
            type="text"
            name="Email"
            placeholder="Enter Email"
            className="ml-2 w-80 mb-4 rounded-sm shadow-sm shadow-sky-300/30"
          />

          <label className="flex flex-col ml-2">
            <span className="text-sm text-sun mb-2">Message</span>
          </label>
          <input
            type="textarea"
            name="Message"
            placeholder="Type message here"
            className="h-50 w-140   rounded-sm shadow-sm shadow-sky-300/40"
          />
          <button type="submit" className="mt-4 w-20 border border-sky-300 rounded-lg p-2 hover:text-sun hover:scale-95 transition-all duration-400">Send</button>
        </form>
      </div>
    </div>,
    document.body,
  );
};

export default ContactModals;
