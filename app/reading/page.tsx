import BookCard from "components/bookcard";
import ReadingProgressBar from "components/reading";


export default function ReadingPage() {
    return (
      <section>
        <h1 className="font-semibold text-xl">Reading</h1>
        <div className="my-5 prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
            <p>
                Mình không thường xuyên đọc sách nhưng
                luôn cố gắng đọc ít nhất 1 cuốn sách mỗi tháng
                (thường là vào ban đêm, trước khi đi ngủ).
            </p>
        </div>
        <ReadingProgressBar/>
        <div className="mt-8">
            <p>Sách đang đọc</p>
                <div className="mt-8 grid grid-cols-2 gap-4 md:gap-14">
                <BookCard
                title="Sapiens: Lược Sử Loài Người"
                author="Yuval Noah Harari"
                imageUrl="/luoc-su-loai-nguoi-sapiens.webp"
                buyUrl="https://tiki.vn/sapiens-luoc-su-loai-nguoi-tai-ban-2022-p253137819.html"
                seller="Mua trên Tiki"
                />
                
                <BookCard
                title="Gian Nan Chồng Chất Gian Nan"
                author="Ben Horowitz"
                imageUrl="/gian-nan-chong-chat-gian-nan.jpeg"
                buyUrl="https://www.alphabooks.vn/gian-nan-chong-chat-gian-nan"
                seller="Mua trên Alphabooks"
                />
               
                </div>
        </div>
      </section>
    );
  }
  