import Image from 'next/image'

import ImgPortrait from './images/portrait.jpg'
import Tokopedia from './images/tokopedia.jpeg'
import Ovo from './images/ovo.jpeg'
import Bounche from './images/bounche.jpeg'

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
            seamless functionality. seamlessly.
          </p>
          <p>
            I&apos;ve been on this journey for 10 years, tackling diverse
            projects and challenges – from people management to ensuring every
            button click is as smooth as butter, I&apos;ve got it covered.I
            believe that creative problem-solving and staying in the loop with
            the latest tech trends will make a better version of everything.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 mt-5">
          <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
              className="h-6 w-6 flex-none"
            >
              <path
                d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
              ></path>
              <path
                d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                className="stroke-zinc-400 dark:stroke-zinc-500"
              ></path>
            </svg>
            <span className="ml-3">Work Experience</span>
          </h2>
          <ol className="mt-6 space-y-4">
            <li className="flex gap-4">
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  width={32}
                  height={32}
                  alt="Tokopedia"
                  className="h-7 w-7 rounded-full"
                  src={Tokopedia}
                />
              </div>
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">Company</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Tokopedia
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                  Software Engineering Manager
                </dd>
                <dt className="sr-only">Date</dt>
                <dd
                  className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                  aria-label="2021 until 2023"
                >
                  <time dateTime="2021">2021</time>{' '}
                  <span aria-hidden="true">—</span>{' '}
                  <time dateTime="2023">2023</time>
                </dd>
              </dl>
            </li>
            <li className="flex gap-4">
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  width={32}
                  height={32}
                  alt="Tokopedia"
                  className="h-7 w-7 rounded-full"
                  src={Tokopedia}
                />
              </div>
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">Company</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Tokopedia
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                  Software Engineering Lead
                </dd>
                <dt className="sr-only">Date</dt>
                <dd
                  className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                  aria-label="2019 until 2021"
                >
                  <time dateTime="2019">2019</time>{' '}
                  <span aria-hidden="true">—</span>{' '}
                  <time dateTime="2021">2021</time>
                </dd>
              </dl>
            </li>
            <li className="flex gap-4">
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  width={32}
                  height={32}
                  alt="Tokopedia"
                  className="h-7 w-7 rounded-full"
                  src={Tokopedia}
                />
              </div>
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">Company</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Tokopedia
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                  Senior Software Engineer
                </dd>
                <dt className="sr-only">Date</dt>
                <dd
                  className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                  aria-label="2018 until 2019"
                >
                  <time dateTime="2018">2018</time>{' '}
                  <span aria-hidden="true">—</span>{' '}
                  <time dateTime="2019">2019</time>
                </dd>
              </dl>
            </li>
            <li className="flex gap-4">
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  width={32}
                  height={32}
                  alt="Tokopedia"
                  className="h-7 w-7 rounded-full"
                  src={Tokopedia}
                />
              </div>
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">Company</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Tokopedia
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                  Software Engineer
                </dd>
                <dt className="sr-only">Date</dt>
                <dd
                  className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                  aria-label="2017 until 2018"
                >
                  <time dateTime="2017">2017</time>{' '}
                  <span aria-hidden="true">—</span>{' '}
                  <time dateTime="2018">2018</time>
                </dd>
              </dl>
            </li>
            <li className="flex gap-4">
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  width={32}
                  height={32}
                  alt="ovo"
                  className="h-7 w-7 rounded-full"
                  src={Ovo}
                />
              </div>
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">Company</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  OVO Financial (Previously Taralite)
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                  UI/UX & Frontend Lead
                </dd>
                <dt className="sr-only">Date</dt>
                <dd
                  className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                  aria-label="2015 until 2017"
                >
                  <time dateTime="2015">2015</time>{' '}
                  <span aria-hidden="true">—</span>{' '}
                  <time dateTime="2017">2017</time>
                </dd>
              </dl>
            </li>
            <li className="flex gap-4">
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  width={32}
                  height={32}
                  alt="Bounche"
                  className="h-7 w-7 rounded-full"
                  src={Bounche}
                />
              </div>
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">Company</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Bounche
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                  Front-end Web Developer
                </dd>
                <dt className="sr-only">Date</dt>
                <dd
                  className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                  aria-label="2014 until 2015"
                >
                  <time dateTime="2014">2014</time>{' '}
                  <span aria-hidden="true">—</span>{' '}
                  <time dateTime="2015">2015</time>
                </dd>
              </dl>
            </li>
          </ol>
          <a
            className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
            href="/kelvinCV.pdf"
            download="cv"
          >
            Download CV
            <svg
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
            >
              <path
                d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="lg:pl-20">
        <ul role="list">
          <li className="flex">
            <a
              className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
              href="https://www.linkedin.com/in/kelvinmijaya/"
              target="_blank"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
              >
                <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
              </svg>
              <span className="ml-4">Follow on LinkedIn</span>
            </a>
          </li>
          <li className="mt-4 flex">
            <a
              className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
              href="https://twitter.com/kelvinmijaya"
              target="_blank"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
              >
                <path d="M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z"></path>
              </svg>
              <span className="ml-4">Follow on Twitter</span>
            </a>
          </li>
          <li className="mt-4 flex">
            <a
              className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
              href="https://www.instagram.com/kelvinmijaya"
              target="_blank"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
              >
                <path d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z"></path>
                <path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z"></path>
              </svg>
              <span className="ml-4">Follow on Instagram</span>
            </a>
          </li>
          <li className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex">
            <a
              className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
              href="mailto:kelvinmijaya@gmail.com"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
              >
                <path
                  fillRule="evenodd"
                  d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
                ></path>
              </svg>
              <span className="ml-4">kelvinmijaya@gmail.com</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
