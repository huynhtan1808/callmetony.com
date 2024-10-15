import Link from 'next/link';
import Image from 'next/image';

interface BookCardProps {
  title: string;
  author: string;
  imageUrl: string;
  buyUrl: string;
  seller: string;
}

export default function BookCard({ title, author, imageUrl, buyUrl, seller }: BookCardProps) {
  return (
    <div className="flex flex-col items-center p-6 space-y-4 bg-foreground dark:bg-muted-500 border-[1px] border-stroke dark:border-muted-50 rounded-xl hover-scale">
      <div className="w-32 shrink-0 h-48 rounded-md overflow-hidden">
        <img alt={title} src={imageUrl} decoding="async" data-nimg="1" className="object-cover w-full h-48" loading="lazy" />
      </div>
      <div className="flex flex-col items-center justify-end w-full text-sm">
        <p className="font-medium text-center">{title}</p>
        <p className="mb-6 text-center text-muted dark:text-muted-100">{author}</p>
        <Link href={buyUrl} className="no-underline" target="_blank">
          <button className="flex text-[13px] flex-row px-[16px] py-[8px] rounded bg-muted-900 border-[0.5px] border-neutral-900/10 dark:border-neutral-100/10 text-white hover-scale">
            {seller}
          </button>
        </Link>
      </div>
    </div>
  );
}
