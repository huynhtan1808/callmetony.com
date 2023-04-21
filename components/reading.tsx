'use client'

import { useState } from 'react';

export default function ReadingProgressBar() {
  const [booksRead, setBooksRead] = useState(3);
  const [totalBooks, setTotalBooks] = useState(12);

  const progress = (booksRead / totalBooks) * 100;

  return (
    <>
    <p className="mb-2 text-sm font-medium">Mục tiêu đọc sách 2023 - {booksRead}/{totalBooks} cuốn sách</p>
    <div className="relative pt-[1px] pb-[1px] h-3 rounded-full bg-neutral-700">
      <div className="absolute top-0 left-0 h-full bg-green-300 rounded-l-full" style={{ width: `${progress}%` }}></div>
      <div className="flex items-center justify-between px-4 text-sm text-neutral-900">
        <div className="sr-only">{Math.round(progress)}%</div>
      </div>
    </div>
    </>
  );
}
