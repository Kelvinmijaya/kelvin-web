import Image from 'next/image'

import WorkExperience from './components/workExperience'
import SocialMedia from './components/socialMedia'

import ImgPortrait from './images/portrait.jpg'

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12 sm:gap-y-8">
      <div className="lg:pl-20">
        <div className="px-2.5 lg:max-w-none">
          <Image
            alt="kelvin mijaya portrait"
            className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            src={ImgPortrait}
          />
        </div>
      </div>
      <div className="lg:order-first lg:row-span-2">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          I&apos;m Kelvin Mijaya.
          <br />I live in Indonesia.
        </h1>
        <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
          <p>
            👋 I&apos;m a Senior Software Engineer who loves building cool stuff
            with React or Javascript. Over the years, I&apos;ve become the go-to
            person for crafting awesome web applications that not only look good
            but also come with good performance, scalability, resilience, and
            seamless functionality.
          </p>
          <p>
            I&apos;ve been on this journey for 10 years, tackling diverse
            projects and challenges – from people management to ensuring every
            button click is as smooth as butter, I&apos;ve got it covered. I
            believe that creative problem-solving and staying in the loop with
            the latest tech trends will make a better version of everything.
          </p>
        </div>
        <WorkExperience />
      </div>
      <div className="lg:pl-20">
        <SocialMedia />
      </div>
    </div>
  )
}
