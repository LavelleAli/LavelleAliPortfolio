import React from 'react';
import SectionHeading from '../../components/SectionHeading/sectionHeading';
import Image from 'next/image';

export const metadata = {
  title: "About | Lavelle Ali",
};

const aboutPage = () => {
  return (
    <section>
      <SectionHeading eyebrow='A few things' title='About Me' />

      <div className='grid gap-12 md:grid-cols-[2fr_1fr]'>
        <div className='flex flex-col gap-4 text-muted leading-relaxed'>
          {/* TODO: write your own story */}
          <p>
            I&apos;m a <span className='text-skyblue'>front-end web developer</span> who enjoys turning
            designs into fast, accessible, and responsive websites.
          </p>
          <p>
            Write a few sentences about how you got into development, what you&apos;re learning right now,
            and what kind of work excites you.
          </p>
          <p>
            Outside of coding, I enjoy <span className='text-sun'>your hobbies here</span>.
          </p>
        </div>

        {/* Photo placeholder — swap for <Image src="/me.jpg" ... /> from next/image */}
        <div className='aspect-square rounded-2xl border-2 border-skyblue bg-surface flex items-center justify-center text-muted font-mono text-sm'>
          <Image src="/Me.png" alt='ME' width={310} height={300} className='rounded-2xl' />
        </div>
      </div>
    </section>
  )
}

export default aboutPage;
