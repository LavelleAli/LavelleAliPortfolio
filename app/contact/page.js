import React from 'react';
import SectionHeading from '../../components/SectionHeading/sectionHeading';

export const metadata = {
  title: "Contact | Lavelle Ali",
};

const contactPage = () => {
  return (
    <section className='max-w-2xl'>
      <SectionHeading eyebrow='Contact' title='Get In Touch'>
        Have a question or want to work together? Send me a message.
      </SectionHeading>

      {/* TODO: hook this up to a form service (Formspree, etc.) or a server action */}
      <form className='flex flex-col gap-5'>
        <label className='flex flex-col gap-2'>
          <span className='text-sm text-muted'>Name</span>
          <input type='text' name='name' required className='bg-surface border border-line rounded-lg px-4 py-3 outline-none focus:border-skyblue' />
        </label>
        <label className='flex flex-col gap-2'>
          <span className='text-sm text-muted'>Email</span>
          <input type='email' name='email' required className='bg-surface border border-line rounded-lg px-4 py-3 outline-none focus:border-skyblue' />
        </label>
        <label className='flex flex-col gap-2'>
          <span className='text-sm text-muted'>Message</span>
          <textarea name='message' rows={5} required className='bg-surface border border-line rounded-lg px-4 py-3 outline-none focus:border-skyblue' />
        </label>
        <button type='submit' className='self-start bg-sun text-ink font-semibold px-6 py-3 rounded-lg hover:bg-snow transition-colors'>
          Send message
        </button>
      </form>
    </section>
  )
}

export default contactPage;
