import Link from 'next/link';
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  cardUrl: string;
  year: string;
}

export default function Card({ title, description, imageUrl, cardUrl, year }: CardProps) {
  return (
    <Link href={cardUrl} className="flex w-full no-underline text-muted-100 hover:text-black dark:hover:text-white flex items-center h-full p-4 space-x-4 rounded-md bg-muted-100 dark:bg-muted-500 dark:border-muted-50 border-[1px] border-muted-50 hover-scale transition-all justify-between" target="_blank">
    <div className="flex w-full items-center justify-between">
      <div className="flex gap-2">
        <div className="w-12 h-12 overflow-hidden shrink-0 rounded-xl">
          <Image alt={title} src={imageUrl} width="48" height="48" decoding="async" data-nimg="1" className="object-cover" loading="lazy"/>
        </div>
        <div>
          <p className="hover:text-text dark:hover:text-white">
            {title}
          </p>
          <p className="text-sm text-muted-100 dark:text-muted-100">{description}</p>
        </div>
      </div>
      <div>
        <p className="text-muted-100 text-base">{year}</p>
      </div>
    </div>
    </Link> 
  );
}
