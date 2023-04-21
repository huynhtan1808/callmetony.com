import Link from 'next/link';
import Image from 'next/image';
import { getBlogViews } from 'lib/metrics';
import {
  ArrowIcon,
  GitHubIcon,
  TwitterIcon,
  ViewsIcon,
} from 'components/icons';
import { name, about, bio, avatar } from 'lib/info';

export const revalidate = 60;

export default async function HomePage() {
  let views;

  try {
    [ views ] = await Promise.all([
      getBlogViews(),
      
    ]);
  } catch (error) {
    console.error(error);
  }

  return (
    <section>
      <div className="flex items-start md:items-center mb-8 flex-col md:flex-row">
        <Image
          alt={name}
          className="rounded-full grayscale"
          src={avatar}
          placeholder="blur"
          width={100}
          priority
        />
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 ">
        
        <h1 className="font-bold">{name}</h1>
        <p className="mb-5 max-w-[460px] text-neutral-800 dark:text-muted-100">
          {about()}
        </p>
        <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
          {bio()}
        </p>
        </div>
      </div>

      <div className="my-12 text-muted-100 dark:text-muted-100">
          <Link href="/blog" className="flex items-center">
            <ViewsIcon />
            {`${views.toLocaleString()} blog views all time`}
          </Link>
      </div>
      
      <div className="space-y-4">
      <h2 className="mb-8">Work</h2>

      <a
      rel="noopener noreferrer"
      target="_blank"
      href="https://homnayangi.xyz/"
      className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
      >
        <div className="flex items-center justify-between">
          <div className="ml-3">
            <p>Hôm nay ăn gì?</p>
            <p className="text-muted-100">Chatbot AI giúp vợ nấu ăn</p>
        </div>
        </div>
        <p className="text-muted-100 text-base">2023</p>
      </a>

      <a
      rel="noopener noreferrer"
      target="_blank"
      href="https://onepixelmedia.com"
      className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
      >
        <div className="flex items-center justify-between">
          <div className="ml-3">
            <p>One Pixel Media</p>
            <p className="text-muted-100">My Digital Marketing Agency</p>
        </div>
        </div>
        <p className="text-muted-100 text-base">2021 - now</p>
      </a>
      </div>

      <div className="mt-20 space-y-4">
      <h2 className="mb-8">Explore</h2>

      <a
      rel="noopener noreferrer"
      href="/reading"
      className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
      >
        <div className="flex items-center justify-between">
          <div className="ml-3">
            <p>Reading</p>
            <p className="text-muted-100">What I've been reading</p>
        </div>
        </div>
        <p className="text-muted-100 text-base">2023</p>
      </a>

      <a
      rel="noopener noreferrer"
      href="/workspace"
      className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
      >
        <div className="flex items-center justify-between">
          <div className="ml-3">
            <p>My Workspace</p>
            <p className="text-muted-100">The gear and software I use</p>
        </div>
        </div>
        <p className="text-muted-100 text-base">2023</p>
      </a>
      </div>

      <ul className="flex flex-col md:flex-row mt-20 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-muted-100 dark:text-muted-100">
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/callmetonyhuynh"
          >
            <ArrowIcon />
            <p className="h-7">follow me on twitter</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:tony@onepixelmedia.com"
          >
            <ArrowIcon />
            <p className="h-7">send me an email</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
